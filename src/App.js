import React from "react";
import Container from "./components/Container";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={store()}>
        <Container />
      </Provider>
    </div>
  );
}

export default App;
