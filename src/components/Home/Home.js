import React, { Component } from 'react';
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
                    <div className="top-text">  <Link to="/shop">  SHOP NOW </Link> </div>
                </div>
                <div className="mid-container">
                    <Link to="/shop"> 
                        <img className="mid" src={require("./clothing1.png")} /> 
                    </Link>
                    <Link to="/shoes"> 
                        <img className="mid" src={require("./shoes.png")} /> 
                    </Link>
                    <div className="mid-left"> CLOTHES </div>
                    <div className="mid-right"> SHOES </div>
                </div>

           </div>
       
        )
    }
}

export default Home;