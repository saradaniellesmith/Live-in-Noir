import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 

import './bag.png';
import './LIVEINNOIR.png';
import './LIVEIN.png';
import './NavBar.css';

class NavBar extends Component {

    render() {
        return (

    <div className ="nav">  
        <label htmlFor="toggle"> &#9776; </label>
        <input type="checkbox" id="toggle"/>
        <div className ="menu">
            <div className="logo">  <Link to="/" style={{ textDecoration: 'none', color: 'black' }}> LIVE IN NOIR </Link> </div>
            <div className="routes">
                <p> <Link to="/" style={{ textDecoration: 'none', color: 'black' }}> HOME </Link> </p>
                <p> <Link to="/shop/:shop" style={{ textDecoration: 'none', color: 'black' }}> SHOP </Link> </p>
                {/* <p> <Link to="/about"> ABOUT </Link> </p> */}
                <p> <Link to="/shoppingcart" style={{ textDecoration: 'none', color: 'black' }}> <img src={require('./bag.png')} style={{ height: '3.2vh', width: 'auto'}}/> </Link> </p>
                <p> <a href={process.env.REACT_APP_LOGIN} style={{ textDecoration: 'none', color: 'black' }}> LOGIN </a> </p>
            </div>
        </div>
    </div>
    
        )
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(NavBar));