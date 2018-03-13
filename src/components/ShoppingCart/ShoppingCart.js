import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from "axios";
import StripeCheckout from 'react-stripe-checkout';

import Checkout from '../Checkout/Checkout'
import './ShoppingCart.css'

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: []
    };
  }
  componentDidMount() {
    axios
      .get("/shoppingcart")
      .then(response => {
        this.setState({ cart: response.data.cart });
      })
      .catch(console.log());
  }

  deleteFromCart(product) {
    console.log("delete");
    axios
      .delete(`/delete/${product}`)
      .then(response => {
        this.setState({
          cart: response.data.cart
        })
      })
  }

  render() {
    let total = 0;
    let cartList = [];
    var cartItems = this.state.cart;
    console.log(this.state.cart);
    if (!(this.state.cart.length > 0)) {
      cartList = <div> </div>;
    } else {
      cartList = cartItems.map((product, index) => {
        return (
          <div className="cart-items" key={index}>
          <div className="cart-description">
            <img className="cart-photo" src={product.image}/>
            <h1 className="cart-name"> {product.product_description} </h1>
            <h2 className="cart-price"> {product.price}.00 </h2>
            <button className="remove" onClick={() => this.deleteFromCart(product.product_id)}> Remove </button>
          </div>
            <div className="checkout">
            
            </div>
          </div>
        );
      });

      total = cartItems.reduce((a, b) => {
        return (a += b.price);
      }, 0);

      console.log(total);
    }
    return (
      <div>
        <div className="cart-list"> 
          <div> {cartList} </div>
          <p> Total: ${total}.00 </p>
          <Checkout 
             name={'The Road to Learn React'}
             description={'Only the Book'}
             amount={1}
             />
        </div> 
      </div>
    );
  }
}

export default ShoppingCart;
