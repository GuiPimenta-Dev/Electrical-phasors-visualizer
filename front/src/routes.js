import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { IsolatedGeneratorSettings } from "./pages/IsolatedGenerator/Settings";
import { ConnectedGeneratorSettings } from "./pages/ConnectedGenerator/Settings";
import { MotorSettings } from "./pages/Motor/settings";
import { Motor } from "./pages/Motor/motor";
import { IsolatedGenerator } from "./pages/IsolatedGenerator/IsolatedGenerator";
import { ConnectedGenerator } from "./pages/ConnectedGenerator/ConnectedGenerator";

import { Home } from "./pages/Home/home";

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/motor" component={MotorSettings} />
          <Route
            exact
            path="/isolated_generator"
            component={IsolatedGeneratorSettings}
          />
          <Route
            exact
            path="/connected_generator"
            component={ConnectedGeneratorSettings}
          />
          <Route exact path="/motor/results" component={Motor} />
          <Route
            exact
            path="/isolated_generator/results"
            component={IsolatedGenerator}
          />
          <Route
            exact
            path="/connected_generator/results"
            component={ConnectedGenerator}
          />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
