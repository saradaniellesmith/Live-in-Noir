import React, {Component} from "react";
import axios from "axios";
import swal from 'sweetalert';

import './ShoeDetails.css';

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
                        <h1> {shoes.brand_name} </h1>
                        <h2> {shoes.product_description} </h2>
                        <h3> ${shoes.price}.00 </h3>
                        <h3 className="editors-note-title"> DESCRIPTION </h3>
                        <p className="editors-note"> {shoes.editor_note} </p>
                        <button className="add" onClick={() => {this.addToCart(shoes)
                            swal({
                                title: "Added to Cart!",
                                text: "",
                                icon: "success",
                                button: "KEEP SHOPPING",
                            });
                        }}> ADD TO CART </button>
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