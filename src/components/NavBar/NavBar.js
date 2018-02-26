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
                <span> HOME </span>
            </Link>
            <Link to="/shop">
                <span> SHOP </span>
            </Link>
            <Link to="/about">
                <span> ABOUT </span>
            </Link>
        </div>
    </div>

        )
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(NavBar));