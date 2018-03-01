import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "./Card/Card";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: []
    };
  }

  componentDidMount() {
    axios.get("/products").then(response => {
      this.setState({ productList: response.data });
    });
  }

  render() {
    var products = this.state.productList.map(function(product, index) {
      console.log(product);
      return (
        <Link to={`/productdetails/${product.product_id}`} key={index}>
          <Card product={product} key={index} />
        </Link>
      );
    });

    return <div> {products} </div>;
  }
}

export default Shop;
