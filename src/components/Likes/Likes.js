import React, {Component} from 'react';
import axios from 'axios';

import './Likes.css';
import './Grey_close_x.svg.png';

class Likes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favsList: [],
            favsTitle: '',
            updateFavsTitle: ''
        }
        this.deleteLikes = this.deleteLikes.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        axios.get("/favs").then(response => {
            console.log(response.data, "this is what we need");
            this.setState({ favsList: response.data, updateFavsTitle: response.data[0].title });
        }).catch(console.log)
    }

    deleteLikes(shoe_id) {
        axios.delete(`/deletefavs/${shoe_id}`)
        .then(response => {
            this.setState({ favsList: response.data });
        }).catch(console.log);
    }

    handleChange(title) {
        this.setState({ favsTitle: title.target.value })
    }

    handleEdit() {
        let body = {title : this.state.favsTitle }
        axios.put("/updatetitle", body)
        .then(response => { 
            this.setState({ updateFavsTitle: this.state.favsTitle })
        })
    }

    render() {
        console.log(this.state.favsList)
       let liked = this.state.favsList.map((element, index) => {
           return(
            <div className="favs-list">
                 <img className="fav-image" src={element.image} />
                    <div className="title-save">  
                    </div>
                    <div onClick={ () => this.deleteLikes(element.shoe_id)} className="unlike" > 
                         <img className="x-unlike" src={require('./Grey_close_x.svg.png')} /> 
                    </div>
            </div>
           )
       })

        return(
        <div className="my-likes-container"> 

                <div className="about-title"> My Favorites </div>
                {/* <h1 className="favs-list-title"> {this.state.updateFavsTitle} </h1>
                <input className="fav-input" type="text" placeHolder="name your favs list" onChange={ (e) => this.handleChange(e)} />
                <button className="edit-save" onClick={() => this.handleEdit()}> update </button> */}
            <div className="favs">
                <div className="liked"> {liked} </div>
            </div>
        </div>
        )
    }
}
export default Likes;