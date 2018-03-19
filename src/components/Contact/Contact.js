import React, { Component } from "react";

import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-title"> CONTACT US </div>
        <h1 className="help" > WHAT CAN WE HELP YOU WITH? </h1>
        <div className="contact">
            <h1 className="contact-us"> Phone </h1> 
            <p> 24 hours a day, 7 days a week
                <br /> 
                US & Canada: 1-800-800-NOIR 
            </p>

            <h1 className="contact-us"> Live Chat </h1> 
            <p> Monday - Friday 
                <br />
                9am - 6pm Central Time
            </p>

        </div>
      </div>
    );
  }
}

export default Contact;