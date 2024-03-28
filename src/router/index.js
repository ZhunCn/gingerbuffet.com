import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../containers/HomePage";
import Menu from "../containers/MenuPage";
// eslint-disable-next-line
import Order from "../containers/OrderPage";
import Location from '../containers/LocationPage';
import PageNotFound from '../containers/PageNotFoundPage'

const Router = () => {
    return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
        <Route path='/order' element={() => { 
          window.location.href = 'https://order.gingerbuffet.com/'; 
          return null;}}/>
        <Route path="/index" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    );
}

export default Router;
