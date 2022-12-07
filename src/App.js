import React from "react";
import classes from "./App.module.css";
import {
  Footer,
  Blog,
  Possibility,
  Feature,
  WhatGPT3,
  Header,
} from "./container";
import { CTA, Brand, Navbar } from "./components";
const App = () => {
  return (
    <div className={classes.App}>
      <div className={classes.gradient__bg}>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature/>
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
