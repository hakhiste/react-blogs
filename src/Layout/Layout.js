import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Aux from "../HOC/hoc";
import Header from "./Header";
import Footer from "./Footer";
import Listing from "../Containers/Blogs/Listings";
import About from "../Containers/About";
import ContactUs from "../Containers/ContactUs";
import Blog from "../Containers/Blogs/Blog";
import Login from "../Containers/Login";

class Layout extends Component {
  render = () => {
    return (
      <Aux>
        <Router>
          <Header />

          <Switch>
            <Route exact path='/' component={Listing} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact-us' component={ContactUs} />
            <Route exact path='/post/:id' component={Blog} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Router>
        <Footer></Footer>
      </Aux>
    );
  };
}
export default Layout;
