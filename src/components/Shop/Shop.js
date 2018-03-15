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
      search: ''
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
    // let filteredProducts = 
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
            <select className="sort-menu" onChange={ e => this.handleSort(e.target.value) }>
              <option value=''> FILTER </option>
              <option value='price'> Price (Low to High) </option>
              <option value='price_desc'> Price (High to Low) </option>
              <option value='brand'> Designer (A-Z) </option>
              <option value='brand_desc'> Designer (Z-A) </option>
            </select> 
          </div>
        </div>

      <div className="shop-container" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}> {products} </div>

    </div>
   )
  }
}

export default Shop;
