import React from "react";
import { Fragment, Link } from "redux-little-router";
import Counter from "./Counter";
import About from "./About";

const App = () => (
  <div>
    <Link href="/counter">Counter</Link>
    <Link href="/about">About</Link>
    <h1>Home1</h1>
    <Fragment forRoute="/counter">
      <Counter />
    </Fragment>
    <Fragment forRoute="/about">
      <About />
    </Fragment>
  </div>
);

export default App;
