import React, {Component} from 'react';
import axios from 'axios';

import './Likes.css';

class Likes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favsList: [],
            
        }
        this.deleteLikes = this.deleteLikes.bind(this)
    }

    componentDidMount() {
        axios.get("/favs").then(response => {
            console.log(response.data, "this is what we need");
            this.setState({ favsList: response.data });
        }).catch(console.log)
    }

    deleteLikes(shoe_id) {
        axios.delete(`/deletefavs/${shoe_id}`)
        .then(response => {
            this.setState({ favsList: response.data });
        }).catch(console.log);
    }


    render() {
        console.log(this.state.favsList)
       let liked = this.state.favsList.map((element, index) => {
           return(
            <div className="favs-list">
                 <img className="fav-image" src={element.image} />
                 <button onClick={ () => this.deleteLikes(element.shoe_id)} className="unlike" > delete </button>
            </div>
           )
       })

        return(
        <div className="my-likes-container"> 
            <h1 className="my-likes"> MY FAVS </h1>
            <div className="favs">
                <div className="liked"> {liked} </div>
            </div>
        </div>
        )
    }
}
export default Likes;