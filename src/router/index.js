import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "../containers/HomePage";
import Menu from "../containers/MenuPage";
import Location from '../containers/LocationPage'

function Router() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/location" component={Location} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
    );
}

export default Router;
