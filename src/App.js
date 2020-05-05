import React from "react";
import Container from "./components/Container";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { RouteConfig } from "./config/routeConfig";
//import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store().store}>
      {/* <PersistGate loading={null} persistor={store().persistor}> */}
      <BrowserRouter>
        <Switch>
          <Route path={RouteConfig.root} component={Container} />
          <Route path={RouteConfig.spam} component={Container} />
          <Route path={RouteConfig.delete} component={Container} />
          <Redirect to="/inbox" exact />
        </Switch>
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
