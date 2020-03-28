import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { inboxMails } from "./reducers/inboxreducer";

const store = () => {
  const store = createStore(
    combineReducers({ inboxMails }),
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
  return store;
};

export default store;
