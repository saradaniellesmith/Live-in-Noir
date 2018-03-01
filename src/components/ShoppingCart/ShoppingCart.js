import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from "axios";

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

  deleteFromCart


  render() {
    let cartList = [];
    var cartItems = this.state.cart;
    console.log(this.state.cart);
    if (!(this.state.cart.length > 0)) {
      cartList = <div> patience my friend </div>;
    } else {
      cartList = cartItems.map((product, index) => {
        return (
          <div className="cart-items" key={index}>
            <h1> {product.product_description} </h1>
            <h2> {product.price} </h2>
            {/* <button onClick={() => }>  </button> */}
          </div>
        );
      });
    }

    return <div> {cartList} </div>;
  }
}

export default ShoppingCart;
