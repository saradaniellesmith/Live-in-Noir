import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import DetailsCard from './DetailsCard/DetailsCard';
import Image from 'react-image-resizer';

class ProductDetails extends Component {
    constructor(props) {
        super(props);

        this.state={
            product: {}
        }
    }

    componentDidMount() {
        return axios.get(`productdetails/${this.props.match.params.product_id}`).then(response => {
            this.setState({ product: response.data });
        });
    }

    render() {
        return(
            <div className="prod-details">
            {/* <DetailsCard /> */}
            </div>
        )
    }
    
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(ProductDetails));