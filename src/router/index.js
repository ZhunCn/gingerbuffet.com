import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "../containers/HomePage";
import Menu from "../containers/MenuPage";
// eslint-disable-next-line
import Order from "../containers/OrderPage";
import Location from '../containers/LocationPage';
import PageNotFound from '../containers/PageNotFoundPage'

const Router = () => {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/location" component={Location} />
        <Route path='/order' component={() => { 
          window.location.href = 'https://order.gingerbuffet.com/'; 
          return null;}}/>
        <Route path="/index" component={Home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
    );
}

export default Router;
