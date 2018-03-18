import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Card from "./Card/Card";
import './Shop.css';

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      sort: '',
    }
    this.handleProdLike=this.handleProdLike.bind(this);
    this.handleSort=this.handleSort.bind(this);
  }

  componentDidMount() {
    axios.get("/products").then(response => {
      this.setState({ productList: response.data });
    });
  }

  handleSort(value) {
    axios.get(`/products/${value}`)
    .then(response => {
      console.log(response.data);
      this.setState({ productList: response.data });
    }).catch(console.log);
  }

  handleProdLike(id) {
    console.log(id);
    axios.post("/prodlikes", {id: id})
      .catch(console.log);
  }
  
  render() {
    var products = this.state.productList.map((product, index) => {
      return (
      <div className="shop-product">
        <Link className="shop-link" to={`/productdetails/${product.product_id}`} key={index}>
          <Card product={product} key={index} />
        </Link>
        {/* <button onClick={ () => {this.handleProdLike(product.product_id)}}> Like </button> */}
      </div>
      );
    });

    return( 
      <div className="shop-page">
        <div className="sort-search-bar">
          <div className="sort">
            <select className="sort-menu" onChange={ e => this.handleSort(e.target.value) }>
              <option value=''> FILTER </option>
              <option value='price'> Price (Low to High) </option>
              <option value='price_desc'> Price (High to Low) </option>
              <option value='brand'> Designer (A-Z) </option>
              <option value='brand_desc'> Designer (Z-A) </option>
            </select> 
          </div>
        </div>
      <div className="shop-container" > {products} </div>
    </div>
   )
  }
}

export default Shop;
