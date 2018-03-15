import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import Radium from 'radium';

import axios from 'axios';

import './bag.png';
import './NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: false
        };
    }

    componentDidMount() {
        axios.get('/checkUser').then(response => {
            console.log(response)
            if(response.data) {
                this.setState({user: true})
            } else {
                this.setState({user: false})
            }
        })
    }

    render() {
        return (
         
    <div className ="nav">  
        <label htmlFor="toggle"> &#9776; </label>
        <input type="checkbox" id="toggle"/>
        <div className ="menu">
            <div className="logo">  <Link to="/" > LIVE IN NOIR </Link> </div>
            <div className="routes">
                <p> <Link to="/shop/:shop" > CLOTHING </Link> </p>
                <p> <Link to="/shoes" > SHOES </Link> </p>
                {/* <p> <Link to="/about"> ABOUT </Link> </p> */}
                <p> <Link to="/shoppingcart" > <img src={require('./bag.png')} style={{ height: '3.2vh', width: 'auto'}}/> </Link> </p>
                <p> {!this.state.user ? <a href={process.env.REACT_APP_LOGIN} > LOGIN </a> 
                : <a href="http://localhost:3001/logout" className="logout"> LOGOUT </a> } </p>
            </div>
        </div>
    </div>
    
        )
    }
}


const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(NavBar));