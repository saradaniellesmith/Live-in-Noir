import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'; 
import axios from 'axios';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';

import './bag.png';
import './hearts.png';
import './NavBar.css';
import './bag.png';


class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: false,
            open: false,
            value: 1
        }

        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    
    componentDidMount() {
        axios.get('/checkUser').then(response => {
            console.log(response)
            if(response.data) {
                this.setState({user: true})
            } else {
                this.setState({user: false})
            }
        })
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});
    handleChange = (event, index, value) => this.setState({value});

    render() {

        const style = {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            margin: '0',
            textTransform: 'uppercase'
          };
      
       

        return (

        <div className ="nav" style={style}> 

        <div className="responsive-menu">
        <div className="responsive-logo"> <Link to="/"> LIVE IN NOIR </Link> </div>
        <MuiThemeProvider >
        <IconMenu iconButtonElement={<IconButton> <img className="hamburger" src={require('./hamicon.png')} /> </IconButton>}>
            <MenuItem primaryText = { <Link  to="/shop/:shop" > CLOTHING </Link> } />
            <MenuItem primaryText = { <Link  to="/shoes" > SHOES </Link> } />
            <MenuItem primaryText = { <Link  to="/shoppingcart" > CART </Link> } />
            <MenuItem primaryText = {!this.state.user ? <a href={process.env.REACT_APP_LOGIN} > LOGIN </a> 
                    : <a href="http://localhost:3001/logout" className="logout"> LOGOUT </a> } />
            <MenuItem primaryText = { <Link  to="/likes" > LIKES </Link> } />
        </IconMenu>

        </MuiThemeProvider>
        </div>
            <div className="full-screen-menu">
            <div className="full-screen-logo"> <Link to="/"> LIVE IN NOIR </Link> </div>
            <div className="menu-items"> 
            <MuiThemeProvider > 
            <Link   to="/shop/:shop">
                <MenuItem  style={{ color: 'black' }}className="item" value={1} onClick={this.handleClose}>CLOTHING</MenuItem>
            </Link>
            <Link to="/shoes">
                <MenuItem style={{ color: 'black' }} className="item" value={2} onClick={this.handleClose}>SHOES</MenuItem>
            </Link>
        
            <Link to="/shoppingcart">
                <MenuItem  style={{ color: 'black' }}className="item" onClick={this.handleClose}><img className="cart-icon" src={require('./bag.png')}/></MenuItem>
            </Link>

            <Link to = '/likes'>
                <MenuItem> <img className="heart-icon" src={require('./hearts.png')}/> </MenuItem>
            </Link>

            <MenuItem style={{ color: 'black' }}className="item">  
            {!this.state.user ? <a href={process.env.REACT_APP_LOGIN} > LOGIN </a> 
                        : <a href="http://localhost:3001/logout" className="logout"> LOGOUT </a> }
            </MenuItem>
        </MuiThemeProvider>  
        </div>    
        </div>
         
         
            {/* <label htmlFor="toggle"> &#9776; </label>
            <input type="checkbox" id="toggle"/>
            <div className="logo">  <Link to="/" > LIVE IN NOIR </Link> </div>
            <div className ="menu">
                <div className="routes">
                    <p> <Link to="/shop/:shop" > CLOTHING </Link> </p>
                    <p> <Link to="/shoes" > SHOES </Link> </p>
                    <p> <Link to="/shoppingcart" > <img className="cart-icon" src={require('./bag.png')}/> </Link> </p>
                    <p> {!this.state.user ? <a href={process.env.REACT_APP_LOGIN} > LOGIN </a> 
                    : <a href="http://localhost:3001/logout" className="logout"> LOGOUT </a> } </p>
                    <p> <Link to="/likes" > <img className="heart-icon" src={require('./hearts.png')}/> </Link> </p>
                </div>
            </div> */}
        </div>
    
        )
    }
}

export default NavBar;