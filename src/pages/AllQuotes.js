import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from '../components/quotes/NoQuotesFound'
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hook/use-http";
import { getAllQuotes } from "../lib/api";


function AllQuotes() {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
  sendRequest()
  }, [sendRequest])
  if(status === 'pending'){
    return <div className="centered">
        <LoadingSpinner/>
    </div>
  }
  if(error){
    return <p className="centered focused">{error}</p>
  }
  if(status === 'complete' && (!loadedQuote || loadedQuote.length === 0 )){
   return <NoQuotesFound/>
  }
  
  return <QuoteList quotes={loadedQuote} />;
}

export default AllQuotes;
