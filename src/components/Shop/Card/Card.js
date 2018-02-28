import React, { Component } from 'react';


class Card extends Component {
    constructor(props) {
        super(props);
    }

render() {
    console.log(this.props)
    return(
        <div className="prod-container">
            {/* <img src={require(this.props.product.image)} /> */}
            <h1> {this.props.product.product_description} </h1>
            <h2> {this.props.product.brand_name} </h2>
            <h3> {this.props.product.price}.00 </h3>
        </div> 
    )
}
}

export default Card;