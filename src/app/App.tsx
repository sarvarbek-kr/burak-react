import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import '../css/app.css';  
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { HomePage } from './screens/homePage';
import { ProductsPage } from './screens/productsPage';
import { OrdersPage } from './screens/ordersPage';
import { UserPage } from './screens/userPage';
import { HomeNavbar } from './components/header/HomeNavbar';
import { OtherNavbar } from './components/header/OtherNavbar';
import { Footer } from './components/footer';

function App() {
  const location = useLocation();

  return (
    <>
        {location.pathname === "/" ? <HomeNavbar/> : <OtherNavbar/>}
        <Switch>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/orders">
            <OrdersPage />
          </Route>
          <Route path="/member-page">
            <UserPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer/>
      </>
);
}

export default App;
  