import React, { Suspense } from "react";
import { Route, Navigate, Routes, Link } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Comments from "./components/comments/Comments";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuotes"));
const QuoteDetail = React.lazy(()=> import('./pages/QuotesDetail'))
const NotFound = React.lazy(()=>import('./pages/NotFound'))
const AllQuotes = React.lazy(()=> import('./pages/AllQuotes'))

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/quotes" replace />} />
          <Route path="/quotes" element={<AllQuotes />} />
          {/* nest route */}
          <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
            <Route
              path=""
              element={
                <div className="centered">
                  <Link className="btn--flat" to={`comments`}>
                    Load Comments
                  </Link>
                </div>
              }
            />
            <Route path={`comments`} element={<Comments />} />
          </Route>
          <Route path="/new-quote" element={<NewQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
