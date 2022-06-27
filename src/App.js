import { Route,Navigate, Routes, Link } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuotes";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuotesDetail";
import Comments from './components/comments/Comments'

function App() {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={ <Navigate to="/quotes" replace/>}/>
      <Route path="/quotes" element={<AllQuotes/>}/>
      {/* nest route */}
      <Route path='/quotes/:quoteId' element={<QuoteDetail />}>
          <Route
            path=''
            element={
              <div className='centered'>
                <Link className='btn--flat' to={`comments`}>
                  Load Comments
                </Link>
              </div>
            }
          />
          <Route path={`comments`} element={<Comments />} />
        </Route>
      <Route path="/new-quote" element={<NewQuotes/>} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </Layout>
  );
}

export default App;
