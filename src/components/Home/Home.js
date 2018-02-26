import React, { Component } from 'react';
import { connect } from 'react-redux';

import "./Home.css";

class Home extends Component {
    render() {
        return (
           <img src={require("./home-image.png")} />
        )
    }
}

export default Home;