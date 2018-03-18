import React, { Component } from 'react';

import './palms.jpeg';

class About extends Component {
    render () {
        return (
            <div className="about">
            <img src={require('./palms.jpeg')} style={{ width: '100%' }} />
                <h1> ABOUT LIVE IN NOIR </h1>
                <p>  Truth is, we love color, just in our surrondings, not on our bodies. 
                     We believe nature provides us with all the color we need so we can live in noir.
                     Black exudes power, simplicity and sense of class al
                </p>
            </div>
        )
    }
}

export default About;