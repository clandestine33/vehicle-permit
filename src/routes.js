import React from "react";
import {
  Router,
  Route as DefaultRoute,
  Switch,
  Redirect,
} from "react-router-dom";
import { isAuthenticated } from "./services/Auth";
import Landing from "./containers/Landing.js";
import Dashboard from "./containers/Dashboard";
import Login from "./views/examples/Login";
import Register from "./views/examples/Register";
import Profile from "./containers/Profile";
import Apply from "./containers/Apply";
import NotFound from "./containers/NotFound";

const { createBrowserHistory } = require("history");

export const history = createBrowserHistory();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <DefaultRoute
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      )
    }
  />
);

const Route = ({ component: Component, ensureNonAuth, ...rest }) => (
  <DefaultRoute
    {...rest}
    render={(props) =>
      ensureNonAuth && isAuthenticated() ? (
        <Redirect
          to={{
            pathname: "/dashboard",
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router history={history}>
    <Switch>
      <Route ensureNonAuth exact path="/" component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Profile} />
      <Route path="/apply" component={Apply} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
