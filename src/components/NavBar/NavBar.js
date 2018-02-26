import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; // connects routes with redux to ensure you don't miss state updates

class NavBar extends Component {
 
    render() {
        return (

    <div className ="nav-bar"> 
        <img />      
        <div className = "nav-links">
            <Link to="/"> 
                <p> HOME </p>
            </Link>
            <Link to="/shop">
                <p> SHOP </p>
            </Link>
            <Link to="/about">
                <p> ABOUT US </p>
            </Link>
        </div>
    </div>

        )
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(NavBar));