import { useEffect } from 'react';
import {useHistory} from 'react-router-dom'

import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from '../hook/use-http';
import {addQuote} from '../lib/api'

function NewQuotes() {
    const {sendRequest,status} = useHttp(addQuote);
    const history = useHistory()
    useEffect(() => {
    if(status === 'complete'){
      history.push('/quotes')
    }
    }, [status,history])
    
    const addQuoteHandler = quoteData =>{
       sendRequest(quoteData)
       console.log(quoteData);
    }
    return ( 
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
     );
}

export default NewQuotes;