import React, { Component } from "react";
import "./App.css";
import Working from "./Working"

//import Quote from "./Quote";
import Quotes from "./Quotes";

class App extends Component {
  render() {
    
    return (
      <div className="App">

        <Working on />

        
        <h2>Simpson Quotes</h2>

        <Quotes/>

      </div>
    );
  }
}

export default App;