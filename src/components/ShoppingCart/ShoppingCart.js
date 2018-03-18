import React, { Component } from "react";
import axios from "axios";
import swal from 'sweetalert';

import Checkout from '../Checkout/Checkout'
import './ShoppingCart.css'
import './Grey_close_x.svg.png';

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
            <div className="remove" onClick={() => this.deleteFromCart(product.product_id)}> <img className="x" src={require('./Grey_close_x.svg.png')} /> </div>
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
      <div className="shopping-cart-page">
        <h1 className="my-cart"> MY CART </h1>
        <div className="cart-list">
          <div> {cartList} </div>
          <div className="checkout">
          <h1 className="order-sum"> ORDER SUMMARY </h1>
          <p className="total"> TOTAL: ${total}.00 </p>
          <Checkout 
             name={'LIVE IN NOIR'}
             description={'Thank you!'}
             amount={total}
             />
          </div>
        </div> 
      </div>
    );
  }
}

export default ShoppingCart;
