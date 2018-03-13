import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Footer.css';

var linkStyle = {
    textDecoration: 'none',
    color: '#a3a5a7',
}

class Footer extends Component {
    render() {
        return (
    <div className="footer-nav">
       <div className="footer-info">
        <div className="section">
            <ul className="column"> 
               <h2 className="link-header"> Account </h2>
               <li className="link"> Manage Account </li>
               <li className="link"> <Link style={linkStyle} to="/returnpolicy"> Orders & Returns </Link> </li>
               <li className="link"> Redeem a Gift </li>
            </ul>
        </div>

        <div className="section"> 
            <ul className="column"> 
               <h2 className="link-header"> Company </h2>
               <li className="link"> <Link style={linkStyle} to="/about">  About  </Link> </li>
               <li className="link"> <Link style={linkStyle} to="/contact">  Contact </Link> </li>
               <li className="link"> Careers </li>
            </ul>
        </div>
        
        <div className="section">
            <ul className="column"> 
               <h2 className="link-header"> Connect </h2>
               <li className="link"> Instagram </li>
               <li className="link"> Twitter </li>
               <li className="link"> Facebook </li> 
            </ul>
        </div> 
    </div>
        <div className="footer-quote">
             <h1 className="quote"> “You can have any color, as long as it’s black.” – Henry Ford </h1>
        </div> 
      
    </div>
        )
    }
}

export default Footer;