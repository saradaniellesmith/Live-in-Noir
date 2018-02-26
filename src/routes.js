import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './components/About/About';
import Checkout from './components/Checkout/Checkout';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Shop from './components/Shop/Shop';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/productdetails" component={ProductDetails} />
        <Route path="/shoppingcart" component={ShoppingCart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/contact" component={Contact} /> 
        <Route path="/about" component={About} />
    </Switch>
);

