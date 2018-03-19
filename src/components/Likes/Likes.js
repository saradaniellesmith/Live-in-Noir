import React, {Component} from 'react';
import axios from 'axios';

import './Likes.css';
import './Grey_close_x.svg.png';

class Likes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favsList: [],
            title: '',
        }
        this.deleteLikes = this.deleteLikes.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
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

    handleChange(event) {
        this.setState({ title: event.target.title })
    }

    handleSave() {
        axios.put("/updatetitle")
        .then(response => {
            this.setState({ title: response.data })
        })
    }


    render() {
        console.log(this.state.favsList)
       let liked = this.state.favsList.map((element, index) => {
           return(
            <div className="favs-list">
                 <img className="fav-image" src={element.image} />
                    <div className="title-save"> 
                        <input className="fav-title" type="text" placeHolder="Why do you like me?" onChange={ (e) => this.handleChange(e)} />
                        <button className="edit-save"> edit </button>
                        <button className="edit-save" onClick={this.handleSave}> save </button> 
                    </div>
                    <div onClick={ () => this.deleteLikes(element.shoe_id)} className="unlike" > 
                         <img className="x-unlike" src={require('./Grey_close_x.svg.png')} /> 
                    </div>
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