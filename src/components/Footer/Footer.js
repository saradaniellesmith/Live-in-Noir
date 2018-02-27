import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
    <div className="footer">

        <div className="footer-left">
            <Link to="/about"> <span> About Us </span> </Link>
            <Link to="/contact"> <span> Contact </span> </Link>
            <Link to="/returnpolicy"> <span> Return Policy </span> </Link>
        </div>

        <div className="footer-social-icons">
            <h4 className="follow"> Stay Connected </h4>
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