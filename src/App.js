import React, { Component } from "react";
import "./App.css";
import Working from "./Working"
import NameForm from "./NameForm"
import Aleaquote from "./Aleaquote"



;

//import Quote from "./Quote";
import Quotes from "./Quotes";

class App extends Component {
  render() {

    return (

      <div className="App">

      	<header className="App-header">
      		<img   src="http://www.freelogovectors.net/wp-content/uploads/2015/06/The-Simpsons-Logo.png"  alt="logo" />
   	 	</header>

   	 	<Aleaquote />	


      	<NameForm />

      	

        <Working on />


        
        <h2>Simpson Quotes</h2>

        <Quotes/>

      </div>
    );
  }
}

export default App;