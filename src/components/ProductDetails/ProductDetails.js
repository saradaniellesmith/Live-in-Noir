import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
// import Image from "react-image-resizer";

import './ProductDetails.css';

class ProductDetails extends  Component {
  constructor(props) {
    super(props);

    this.state = {
      product: []
    };

    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/productdetails/${this.props.match.params.product_id}`)
      .then(response => {
        console.log(response.data);
        this.setState({ product: response.data });
      });
  }

  addToCart(product) {
    console.log("test");
    axios
      .post("/shoppingcart", product)
      .then(response => response.data.cart)
      .catch(console.log);
  }

  render() {
    console.log(this.state.product);
    var product = this.state.product.map((product, index) => {
      console.log(this);
      return (
        <div className="product-details-page" key={index}>
        <div className="details-images">
          <img className="image-details" src={product.image}  />
          <img className="image-details" src={product.image2} />
          <img className="image-details" src={product.image3} />
        </div>
          <div className="product-info">
            <h1> {product.brand_name} </h1>
            <h2> {product.product_description} </h2>
            <h3> {product.price}.00 </h3>
            {/* <p> Description </p> */}
            <p className="editors-note"> {product.editor_note} </p>
            <button className="add" onClick={() => this.addToCart(product)}> ADD ME, YOU KNOW YOU WANT TO </button>
          </div>
        </div>
      );
    });

    return <div> {product} </div>;
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(ProductDetails));
