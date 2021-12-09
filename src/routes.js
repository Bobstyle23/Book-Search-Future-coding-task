import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./visuals/home";
import Book from "./visuals/book";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/book/:ID" component={Book} />
  </Switch>
);
