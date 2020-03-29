import React from "react";
import Container from "./components/Container";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Provider store={store()}>
        <BrowserRouter>
          <Switch>
            <Route path="/inbox" component={Container} />
            <Route path="/spam" component={Container} />
            <Route path="/delete" component={Container} />
            <Redirect to="/inbox" exact />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
