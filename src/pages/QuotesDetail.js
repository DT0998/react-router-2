import React, { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HightlightedQuote from '../components/quotes/HighlightedQuote'
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hook/use-http";
import { getSingleQuote } from '../lib/api'
const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'Max',
        text: 'Learning react is fun',
    },
    {
        id: 'q2',
        author: 'Maximilian',
        text: 'Learning react is great',
    }
]

function QuotesDetails() {
    const match = useRouteMatch()
    const params = useParams();
    console.log(match);
    const {quoteId} = params;
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)

    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest,quoteId])
    if(status === 'pending'){
        return <div className="centered">
            <LoadingSpinner/>
        </div>
    }
    if(error){
        return <p className="centered">{error}</p>
    }
    if (!loadedQuote.text) {
        return <p>No quote found</p>
    }
    return (
        <React.Fragment>
            <HightlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Route exact path={match.path}>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </React.Fragment>
    );
}

export default QuotesDetails;