import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

import "./Home.css";
import Background from './home-image.png';

// var homeStyle = {
//     backgroundImage: 'url({Background})',
//     height: '100%',
//     width: '100%'
// }


class Home extends Component {
    render() {
        return (
           <div className="home-container">
                <div className="top-container">
                    <img className="top" src={require("./home-image.png")} />
                    <div class="top-text">  </div>
                </div>
                <div className="mid-container">
                    <img className="mid" src={require("./clothing1.png")} />
                    <img className="mid" src={require("./shoes.png")} />
                    <div class="mid-left"> <Link to="/shop">  CLOTHES </Link> </div>
                    <div class="mid-right"> <Link to="/shoes">  SHOES </Link> </div>
                </div>

           </div>
       
        )
    }
}

export default Home;