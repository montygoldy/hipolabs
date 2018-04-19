import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home/Home";
import Venues from "../components/Venues/Venues";
import VenueDetail from "../components/VenueDetail/VenueDetail";
import NotFound from "../components/NotFound";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/venues" component={Venues} />
          <Route path="/venues/:id" component={VenueDetail} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
