import React, { Component } from "react";

import "./palms.jpeg";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-title"> ABOUT US </div>
        <img className="about-pic" src={require("./palms.jpeg")} />
        <p className="about-us">
          Live in Noir is a global, digital, contemporary brand with an
          independent spirit. We are obsessed with building a business model for
          the future, putting brand experience and the customer at the core of
          everything we do.
          <br />
          <br />
          We may believe in the power and simplicity that
          comes from dressing in all black, but don't let us fool you. We cherish
          our surroundings and are constantly inspired by the beauty and color
          provided by the world around us.
        </p>
      </div>
    );
  }
}

export default About;
