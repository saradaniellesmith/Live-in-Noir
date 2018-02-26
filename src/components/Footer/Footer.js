import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
    <div className="footer">
        <div className="footer-left">
        
            <Link to="/about"> 
                <span> About Us </span>
            </Link>
            <Link to="/contact">
                <span> Contact </span>
            </Link>
            <Link to="/returnpolicy">
                <span> Return Policy </span>
            </Link>

        </div>

        <div className="footer-center">
        </div>

        <div className="footer-right">
        </div>
    </div>
        )
    }
}

export default Footer;