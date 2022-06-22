import { Route, Switch,Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuotes";
import QuotesDetails from "./pages/QuotesDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
    <Switch>
      <Route exact path="/">
      <Redirect to="/quotes"/>
      </Route>
      <Route exact path="/quotes">
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuotesDetails />
      </Route>
      <Route path="/new-quote">
        <NewQuotes />
      </Route>
      <Route path="*">
       <NotFound/>
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
