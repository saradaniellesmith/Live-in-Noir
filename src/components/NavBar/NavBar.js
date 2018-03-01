import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; // connects routes with redux to ensure you don't miss state updates

import './NavBar.css';

class NavBar extends Component {

    render() {
        return (

    <div className ="nav">  
        <label htmlFor="toggle"> &#9776; </label>
        <input type="checkbox" id="toggle"/>
        <div className ="menu">
            <div className="logo"> LIVE IN NOIR </div>
            <p> <Link to="/"> HOME </Link> </p>
            <p> <Link to="/shop/:shop"> SHOP </Link> </p>
            {/* <p> <Link to="/about"> ABOUT </Link> </p> */}
            <p> <Link to="/shoppingcart"> CART </Link> </p>
            <p> LOGIN </p>
        </div>
    </div>

        )
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(NavBar));