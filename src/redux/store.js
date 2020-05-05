import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
//import { inboxMails } from "./reducers/inboxreducer";
//import localStorage from "redux-persist/lib/storage";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { inboxMails } from "./reducers/inboxreducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ inboxMails })
);
//let persistor = persistStore(store);

const store = () => {
  const store = createStore(
    //combineReducers({ inboxMails }),
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
  let persistor = persistStore(store);
  //return store;
  return { store, persistor };
};

export default store;
