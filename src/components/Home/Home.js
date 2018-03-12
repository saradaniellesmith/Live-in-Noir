import React, { Component } from 'react';
import { connect } from 'react-redux';

import "./Home.css";

class Home extends Component {
    render() {
        return (
           <div id="cf">
              <img className="top" src={require("./home-image.png")} />
              {/* <img class="bottom"src={require("./forest.jpg")} /> */}
           </div>
       
        )
    }
}

export default Home;