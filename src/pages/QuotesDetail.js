import React from "react";
import { useParams,Route,Link } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HightlightedQuote from '../components/quotes/HighlightedQuote'
const DUMMY_QUOTES = [
    {
        id:'q1',
        author:'Max',
        text:'Learning react is fun',
    },
    {
        id:'q2',
        author:'Maximilian',
        text:'Learning react is great',
    }
]

function QuotesDetails() {
    const params = useParams();
    const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId)

    if(!quote){
        return <p>No quote found</p>
    }
    return (
        <React.Fragment>
            <HightlightedQuote text={quote.text} author={quote.author}/>
            <Route exact path={`/quotes/${params.quoteId}`}>
            <div className="centered">
            <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
            </div>
            </Route>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments/>
            </Route>
        </React.Fragment>
      );
}

export default QuotesDetails;