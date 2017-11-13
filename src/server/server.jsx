import path from "path";
import express from "express";
import compression from "compression";
import React from "react";
import { renderToString } from "react-dom/server";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { routerForExpress } from "redux-little-router";
import renderHTML from "./renderHTML";
import routes from "../app/routes";
import App from "../app/components/App";
import reducers from "../app/reducers/reducers";

const app = express();

app.use(compression());
app.use("/public", express.static(path.join("dist/public")));
app.get("*", (req, res) => {
  const { reducer, middleware, enhancer } = routerForExpress({
    routes,
    request: req
  });
  const store = createStore(
    combineReducers({ ...reducers, router: reducer }),
    { counter: 4 },
    compose(enhancer, applyMiddleware(middleware))
  );
  const appString = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
  res.send(renderHTML(appString, store.getState()));
});

const port = process.env.PORT || "1337";

/* eslint-disable no-console */
app.listen(port, () => console.log(`Server listening on port ${port}`));
