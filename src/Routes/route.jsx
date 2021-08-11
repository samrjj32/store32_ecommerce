import React, { Component, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import Home from "../Layouts/Home";
import ProductDetails from "../Layouts/ProductDetails";
import Header from "../Components/Header";
import Filter from "../Layouts/Filter";
import Cart from "../Layouts/Cart";
import Tests from "../Layouts/tests";
import Scroll from "../Layouts/scroll";

import LazyTest from "../Layouts/LazyTest"

import OptimizeTest from "../Layouts/optimizeTest";

function Routes() {
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   const header = document.getElementById("nav");
  //   // const sticky = header.offsetTop;
  //   // console.log("hey", header, window.scrollY);
  //   if (window.scrollY > 0) {
  //     header.classList.add("sticky");
  //   } else {
  //     header.classList.remove("sticky");
  //   }
  // };

  return (
    <div>
      <Router>
        <Header 
        />
        <Switch>
          {/* <Route path="/" exact component={LazyTest} />
          <Route path="/2" exact component={Tests} /> */}
          
          {/* <Route path="/" exact component={OptimizeTest} /> */}

          <Route path="/" exact component={Home} />
          <Route path="/product/:id" exact component={ProductDetails} />
          <Route path="/filter" exact component={Filter} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
