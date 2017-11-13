import React from "react";
import { Fragment, Link } from "redux-little-router";
import styled from "react-emotion";
import Counter from "./Counter";
import About from "./About";

const Button = styled("button")`
  width: 200px;
  height: 100px;
  border-radius: 20px;
`;

const App = () => (
  <div>
    <Link href="/counter">Counter</Link>
    <Link href="/about">About</Link>
    <Button>Big button</Button>
    <Fragment forRoute="/counter">
      <Counter />
    </Fragment>
    <Fragment forRoute="/about">
      <About />
    </Fragment>
  </div>
);

export default App;
