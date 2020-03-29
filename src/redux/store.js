import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { inboxMails } from "./reducers/inboxreducer";

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)
// let persistor = persistStore(store)

const store = () => {
  const store = createStore(
    combineReducers({ inboxMails }),
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
  // let persistor = persistStore(store);
  return store;
  // return {store , persistor}
};

export default store;
