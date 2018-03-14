import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import swal from 'sweetalert';


class ShoeDetails extends Component {
    constructor(props) {
        super(props);
        
        this.state ={
            shoes: []
        };

    }

    componentDidMount() {
        axios
        .get(`/shoedetails/${this.props.match.params.shoe_id}`)
        .then(response => {
            console.log(response.data);
            this.setState({ shoes: response.data });
        });
    }

    addToCart(shoes) {
        axios 
            .post("/shoppingcart", shoes)
            .then(response => response.data.cart)
            .catch(console.log);
    }

    render() {
        const shoes = this.state.shoes.map((shoes, index) => {
            return(
                <div className="shoes-details-page" key={index}>
                    <div className="shoes-details-images">
                        <img className="image-details" src={shoes.image}  />
                        <img className="image-details" src={shoes.image2} />
                        <img className="image-details" src={shoes.image3} />
                    </div>
                    <div className="shoe-info">
                        <button className="add" onClick={() => {this.addToCart(shoes)}}> ADD TO CART </button>
                    </div>
                </div>
            )
        })

        return(
            <div>
                <div> {shoes} </div>
            </div>
        )
    }

}

export default ShoeDetails;