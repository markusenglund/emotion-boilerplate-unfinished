import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { routerForBrowser } from "redux-little-router";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/reducers";
import App from "./components/App";
import routes from "./routes";

const { reducer, middleware, enhancer } = routerForBrowser({
  routes
});

const preloadedState = window.PRELOADED_STATE;

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
