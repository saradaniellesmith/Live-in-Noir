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
        axios.get("/getUserLikes").then(response => {
            this.setState({ favsList: response.data });
        });
    }
   

    render() {
        // let liked = map over favs list from database
        return (
            <div> mapped </div>
        )

        return(

            <div>

                <p> Favs Page </p>
                <button> edit </button>
                <input placeHolder="favs page" />

              <div> favs </div>
            </div>
        )
    }
}
export default Likes;