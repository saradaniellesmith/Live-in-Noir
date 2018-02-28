import React, { Component } from 'react';
import Image from 'react-image-resizer';

class DetailsCard extends Component {
    constructor(props) {
        super(props);
    }

render() {
    return( 
        <div className="details-container">
            <Image src={this.props.product.image} height={500} width={500}/>
            <h1> {this.props.product.product_description} </h1>
            <h2> {this.props.product.brand_name} </h2>
            <h3> {this.props.product.price}.00 </h3> 
        </div> 
    )
}
}

export default DetailsCard;