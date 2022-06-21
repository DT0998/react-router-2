import { Route, Switch,Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuotes";
import QuotesDetails from "./pages/QuotesDetail";

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
      <Route path="/quotes/:quotesId">
        <QuotesDetails />
      </Route>
      <Route path="/new-quote">
        <NewQuotes />
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
