import React, { Component } from "react";

import './ReturnPolicy.css';

class ReturnPolicy extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-title"> CONTACT US </div>
        <h1 className="help" > WHAT CAN WE HELP YOU WITH? </h1>
        <p className="about-us">
        Return Policy
        <br />
        <ul>
            <li> Merchandise must be returned within 30 days. </li>

            <li> Merchandise must not be worn, altered, or washed. </li>

            <li> Merchandise must have all tags attached and be returned in original packaging.</li>

            <li> Merchandise returned without the original security tag, or a damaged security tag, may result in a delayed refund or may not qualify for a refund.  </li>

            <li> Footwear must include the original shoe box in its original condition, without postal labels. Shoe box fees are charged when footwear is returned in a damaged shoe box, or without the original shoe box. </li>

            <li> Please Note: Shipping and handling charges are not refundable. Packages that arrive COD may be denied, or the COD amount may be deducted from your return.</li>

            <li> Final Sale items may not be returned.</li>

            <li> Live in Noir monitors account activity and reserves the right to refuse transactions, assess fees, and/or close accounts based on order or returns behavior.</li>
       </ul>
        </p>
      </div>
    );
  }
}

export default ReturnPolicy;