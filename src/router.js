import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Lista from "./components/Lista/index";
import TelaLogin from "./pages/login/index";
import Home from "./pages/amigos/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={TelaLogin} />
      <Route path="/login" component={TelaLogin} />
      <Route path="/home" component={Home} />
      <Route path="/lista" component={Lista} />
      <Route path="/login" component={TelaLogin} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
