import { Route,Navigate, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuotes";
import QuotesDetails from "./pages/QuotesDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={ <Navigate to="/quotes" replace/>}/>
      <Route path="/quotes/*" element={<AllQuotes/>}/>
      <Route path="/quotes/:quoteId" element={<QuotesDetails/>}/>
      <Route path="/new-quote" element={<NewQuotes/>} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </Layout>
  );
}

export default App;
