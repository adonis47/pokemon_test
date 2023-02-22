import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
// import { ls } from "./actions/Utiles";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const devTools =
  window.location.hostname === "localhost"
    ? composeEnhancer(applyMiddleware(thunk))
    : applyMiddleware(thunk);

const store = createStore(reducers, devTools);

export default store;
