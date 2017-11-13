import React from "react";
import { renderToString } from "react-dom/server";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { routerForExpress } from "redux-little-router";
import { extractCritical } from "emotion-server";
import routes from "../app/routes";
import reducers from "../app/reducers/reducers";
import App from "../app/components/App";

export default function renderHTML(req, res) {
  const { reducer, middleware, enhancer } = routerForExpress({
    routes,
    request: req
  });
  const store = createStore(
    combineReducers({ ...reducers, router: reducer }),
    { counter: 4 },
    compose(enhancer, applyMiddleware(middleware))
  );

  const preloadedState = store.getState();

  const appString = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const { css, ids } = extractCritical(appString);
  const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>SSR and HMR boilerplate</title>
    <style>${css}</style>
  </head>
  <body>
    <div id="app">${appString}</div>
  </body>
  <script>
    window.PRELOADED_STATE = ${JSON.stringify(preloadedState)}
    window.EMOTION_IDS = ${JSON.stringify(ids)}
  </script>
  <script src="/public/bundle.js"></script>
</html>
  `;
  res.send(html);
}
