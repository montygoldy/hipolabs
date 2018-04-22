import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home/Home";
import Venues from "../components/Venues/Venues";
import VenueDetail from "../components/VenueDetail/VenueDetail";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Blog from "../components/Blog/Blog";
import NotFound from "../components/NotFound";


class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/venues" component={Venues} />
          <Route path="/venues/:id" component={VenueDetail} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    )
  }
}

export default Routes;
