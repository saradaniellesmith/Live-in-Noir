import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
    <div className="footer">

        <div className="footer-left">
            <Link to="/about">  About Us  </Link>
            <Link to="/contact">  Contact  </Link>
            <Link to="/returnpolicy">  Return Policy  </Link>
        </div>

        <div className="footer-social-icons">
            <ul className="social-icons">
                <li><a href="" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
                <li><a href="" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
                <li><a href="" className="social-icon"> <i className="fa fa-instagram"></i></a></li>
            </ul>
        </div>

        <div className="footer-right">
        </div>
    </div>
        )
    }
}

export default Footer;