import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./Home.css";
import './home-image.png';

class Home extends Component {
    render() {
        return (
           <div className="home-container">
                <div className="top-container">
                    <img className="top" src={require("./home-image.png")} />
                    {/* <div className="top-text">  <Link to="/shop">  SHOP NOW </Link> </div> */}
                </div>
                <div className="mid-container">
                    <Link to="/shop"> 
                        <img className="mid" src={require("./blackclothes.png")} /> 
                    </Link>
                    <Link to="/shoes"> 
                        <img className="mid" src={require("./shoes.png")} /> 
                    </Link>
                    <div className="mid-left"> <Link to="/shop" className="home-hover"> CLOTHES </Link> </div>
                    <div className="mid-right"> <Link to="/shoes" className="home-hover"> SHOES </Link> </div>
                </div>

           </div>
       
        )
    }
}

export default Home;