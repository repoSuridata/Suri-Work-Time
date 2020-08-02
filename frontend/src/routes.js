import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Panel from "./pages/Panel";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/panel" component={Panel} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
