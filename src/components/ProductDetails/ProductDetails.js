import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
// import DetailsCard from './DetailsCard/DetailsCard';
import Image from "react-image-resizer";

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: []
    }

    this.addToCart = this.addToCart.bind(this);
    this.add= this.add.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/productdetails/${this.props.match.params.product_id}`)
      .then(response => {
        console.log(response.data);
        this.setState({ product: response.data });
      });
  }

  addToCart() {
    console.log("test")
    // axios.post('/shoppingcart', product)
    // .then(response => (response.data.cart)).catch(console.log)
  }

  add(){
      console.log("hi");
  }

  render() {
      console.log(this.state.product)
    var product = this.state.product.map(function(product, index) {
      return (
        <div className="prod-details" key={index}>
         <Image src={product.image} height={500} width={500} /> 
          <h1> {product.brand_name} </h1>
          <h2> {product.product_description} </h2>
          <h3> {product.price}.00 </h3>
          <p> {product.editor_note} </p>
          <button onClick={()=> this.add()}> Add to Cart </button>
        </div>
      );
    });

    return <div> {product} </div>;
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(ProductDetails));
