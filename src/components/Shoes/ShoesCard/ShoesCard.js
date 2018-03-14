import React, {Component} from 'react';

import './ShoesCard.css';

class ShoesCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="shoe-container">
                <img className="shoe-image" src={this.props.shoes.image} />
                <div className="shoe-details">
                    <h1 className="shoe-description"> {this.props.shoes.product_description} </h1>
                    <p className="shoe-brand"> {this.props.shoes.brand_name} </p>
                    <p className="shoe-price"> {this.props.shoes.price}.00 </p>
                </div>
            </div>
        )
    }
}

export default ShoesCard;