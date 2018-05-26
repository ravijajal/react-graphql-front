import "./styles/global/index.scss";
import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={props => (
                <route.layout {...props}>
                  <route.container {...props} />
                </route.layout>
              )}
            />
          ))}
        </Switch>
      </Router>
    );
  }
}

export default App;
