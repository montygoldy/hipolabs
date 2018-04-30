import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home/Home";
import Venues from "../components/Venues/Venues";
import VenueDetail from "../components/VenueDetail/VenueDetail";
import NotFound from "../components/NotFound";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Routes = () => {
  return (
    <Layout>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition timeout={300} classNames="fade" key={location.key}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/venues" component={Venues} />
                <Route exact path="/venues/:id" component={VenueDetail} />
                <Route component={NotFound} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Layout>
  );
};

export default Routes;
