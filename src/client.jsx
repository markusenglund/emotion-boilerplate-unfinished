import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { routerForBrowser } from "redux-little-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { hydrate } from "react-emotion";
import reducers from "./app/reducers/reducers";
import App from "./app/components/App";
import routes from "./app/routes";

const { reducer, middleware, enhancer } = routerForBrowser({
  routes
});

const preloadedState = window.PRELOADED_STATE;
const ids = window.EMOTION_IDS;
delete window.PRELOADED_STATE;
delete window.EMOTION_IDS;
hydrate(ids);

const store = createStore(
  combineReducers({ ...reducers, router: reducer }),
  preloadedState,
  composeWithDevTools(enhancer, applyMiddleware(middleware))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
