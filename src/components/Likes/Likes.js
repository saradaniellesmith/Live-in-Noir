import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Likes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favsList: [],
            
        }
    }

    componentDidMount() {
        axios.get("/favs").then(response => {
            console.log(response.data, "this is what we need");
            this.setState({ favsList: response.data });
        }).catch(console.log)
    }

    render() {
       let liked = this.state.favsList.map((element, index) => {
           return(
            <div>
               <p> {element.brand_name} </p>
            </div>
           )
       })

        return(

            <div>
                <p> Favs Page </p>
                <button> edit </button>
                <input placeHolder="favs page" />
               <div> {liked} </div>
            </div>
        )
    }
}
export default Likes;