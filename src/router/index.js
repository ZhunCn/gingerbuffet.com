import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "../containers/HomePage";

function Router() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
    );
}

export default Router;
