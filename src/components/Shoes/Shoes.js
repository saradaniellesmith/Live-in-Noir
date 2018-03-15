import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

import ShoesCard from './ShoesCard/ShoesCard';
import './ShoesCard/ShoesCard';

class Shoes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shoesList: [],
            sort: ''
        }
    }

    componentDidMount() {
        axios.get("/shoes").then(response => {
            this.setState({ shoesList: response.data });
        });
    }

    handleSort

    render(){
        var shoes = this.state.shoesList.map(function(shoes, index) {
            return (
                <Link to={`/shoedetails/${shoes.shoe_id}`} key={index} style={{ width: '33%', textDecoration: 'none', color: 'black'}}>
                   <ShoesCard shoes={shoes} key={index} />
                </Link>
            );
        });


        return(
            <div className="shoes-page">
                <div className="shoes-container" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}> {shoes} </div>
            </div>
        )
    }

}

export default Shoes;