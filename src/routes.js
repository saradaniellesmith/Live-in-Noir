import React from 'react';
import { Switch, Route } from 'react-router-dom';


import About from './components/About/About';
import Checkout from './components/Checkout/Checkout';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Shop from './components/Shop/Shop';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import ReturnPolicy from './components/ReturnPolicy/ReturnPolicy';
import Shoes from './components/Shoes/Shoes';
import ShoeDetails from './components/ShoeDetails/ShoeDetails';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/productdetails/:product_id' component={ProductDetails} />
        <Route path="/shoppingcart" component={ShoppingCart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/contact" component={Contact} /> 
        <Route path="/about" component={About} />
        <Route path="/returnpolicy" component={ReturnPolicy} />
        <Route path="/shoes" component={Shoes} />
        <Route path="/shoedetails/:shoe_id" component={ShoeDetails} />
    </Switch>
);

