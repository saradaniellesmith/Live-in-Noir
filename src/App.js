import React, { Component } from "react";


import "./App.css";
import routes from "./routes";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header> 
          <NavBar /> 
        </header>
          <div className="Routes"> 
            { routes } 
          </div>
        <footer> 
          <Footer /> 
        </footer>
      </div>
    );
  }
} 

export default App;