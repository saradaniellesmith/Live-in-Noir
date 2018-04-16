import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
    }
render() {
    return(
        <div className="prod-container">
            <img className="prod-image" src={this.props.product.image} />
                <div className="product-details" >
                    <h1 className="description"> {this.props.product.product_description} </h1>
                    <p className="price"> {this.props.product.price}.00 </p> 
            </div>
        </div> 
    )
  }
}
export default Card;

