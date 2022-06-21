import React from "react";
import { useParams,Route } from "react-router-dom";
import Comments from '../components/comments/Comments'
function QuotesDetails() {
    const params = useParams();

    return (
        <React.Fragment>
            <h1>Quotes Details page</h1>
            <p>{params.quotesId}</p>
            <Route path={`/quotes/${params.quotesId}/comments`}>
                <Comments/>
            </Route>
        </React.Fragment>
      );
}

export default QuotesDetails;