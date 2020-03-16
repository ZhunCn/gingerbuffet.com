import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "../containers/HomePage";
import Menu from "../containers/MenuPage";
import Location from '../containers/LocationPage';
import PageNotFound from '../containers/PageNotFoundPage'

const Router = () => {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/location" component={Location} />
        <Route path="/index" component={Home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
    );
}

export default Router;
