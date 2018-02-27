import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; // connects routes with redux to ensure you don't miss state updates

import './NavBar.css';

class NavBar extends Component {

    render() {
        return (

    <div className ="nav">  
        <label for="toggle"> &#9776; </label>
        <input type="checkbox" id="toggle"/>
        <div className ="menu">
            <div className="logo"> LIVE IN NOIR </div>
            <a href=""> <Link to="/"> HOME </Link> </a>
            <a href=""> <Link to="/shop"> SHOP </Link> </a>
            <a href=""> <Link to="/about"> ABOUT </Link> </a>
            <a href=""> {process.env.REACT_APP_LOGIN} LOGIN </a>
        </div>
    </div>

        )
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(NavBar));