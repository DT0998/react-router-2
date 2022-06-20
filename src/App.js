import { Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuotes";
import QuotesDetails from "./pages/QuotesDetail";

function App() {
  return (
    <Switch>
      <Route exact path="/quotes">
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuotesDetails />
      </Route>
      <Route path="/new-quote">
        <NewQuotes />
      </Route>
    </Switch>
  );
}

export default App;
