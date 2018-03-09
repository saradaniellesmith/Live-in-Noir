import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
    }
render() {
    return(
        <div className="prod-container">
            <img src={this.props.product.image} />
            <div className="product-details" >
                <h1 className="description"> {this.props.product.product_description} </h1>
                <h2 className="brand"> {this.props.product.brand_name} </h2>
                <h3 className="price"> {this.props.product.price}.00 </h3> 
            </div>
        </div> 
    )
  }
}
export default Card;