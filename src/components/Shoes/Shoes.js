import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

import ShoesCard from './ShoesCard/ShoesCard';
import './Shoes.css';

class Shoes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shoesList: [],
            sort: '',
        }
        this.handleShoeLike=this.handleShoeLike.bind(this);
        this.handleSort=this.handleSort.bind(this);
    }

    componentDidMount() {
        axios.get("/shoes").then(response => {
            this.setState({ shoesList: response.data });
        });
    }

    handleSort(value) {
        console.log(value);
        axios.get(`/shoes/${value}`)
        .then(response => {
            console.log(response.data);
            this.setState({ shoesList: response.data })
        }).catch(console.log);
    }

    handleShoeLike(id) {
        console.log(id);
        axios.post("/shoelikes", {id: id})
        .catch(console.log);
    }

    render(){
        console.log(this.state.shoesList);
        var shoes = this.state.shoesList.map((shoes, index) => {
            return (
                <div>
                <Link className="shoes-link" to={`/shoedetails/${shoes.shoe_id}`} key={index} >
                   <ShoesCard shoes={shoes} key={index} />
                </Link>
                <button onClick={ () => {this.handleShoeLike(shoes.shoe_id)}}> Like </button>
                </div>
            );
        });

        return(
          <div className="shoes-page">
            <div className="sort-search-bar">
              <div className="sort">
                <select className="sort-menu" onChange={ e => this.handleSort(e.target.value)}>
                    <option value=''> FILTER </option>
                    <option value='price'> Price (Low to High) </option>
                    <option value='price_desc'> Price (High to Low) </option>
                    <option value='brand'> Designer (A-Z) </option>
                    <option value='brand_desc'> Designer (Z-A) </option>
                </select>
              </div>
            </div>
           <div className="shoes-container"> {shoes} </div>
        </div>
        )
    }

}

export default Shoes;