import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Card from "./Card/Card";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      sort: ''
    }
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

  render() {
    var products = this.state.productList.map(function(product, index) {
      return (
        <Link to={`/productdetails/${product.product_id}`} key={index} style={{ width: '33%', textDecoration: 'none', color: 'black'}}>
          <Card product={product} key={index} />
        </Link>
      );
    });

    return( 
      <div className="shop-page">

        <div className="sort-search-bar">
          <div className="sort">
            <select onChange={ e => this.handleSort(e.target.value) }>
              <option value=''> Filter </option>
              <option value='price'> Price (low to high) </option>
              <option value='price_desc'> Price (high to low) </option>
              <option value='brand'> Designer (A-Z) </option>
              <option value='brand_desc'> Designer (Z-A) </option>
            </select> 
          </div>
        </div>

      <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}> {products} </div>

    </div>
   )
  }
}

export default Shop;
