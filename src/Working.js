import React, { Component } from 'react';
import "./Working.css";

const image = { true : "http://www.guidedesbieres.com/photos/homer-simpsons-duff-beer.gif",
				false : "http://francescodelbuono.com/wp-content/uploads/2018/06/DesesperoSimpson.gif"};


class Working extends Component {
	constructor() {
		super();
		this.state = {working: false};
	};

	change = () => {
		this.setState({ working: !this.state.working });
		
		
	}

	render() {
		const working = this.state.working ? 'Beer' : 'Working';
		const classLogoHeader = "boutonActiv"+this.state.working.toString()
		console.log(classLogoHeader)

		return (

	      <div>

	       	<header className="App-header">
          		<img className={classLogoHeader}  src="http://www.freelogovectors.net/wp-content/uploads/2015/06/The-Simpsons-Logo.png"  alt="logo" />
       	 	</header>

	      	<h3> Homer is he Working or Drinking Beer ?</h3>
	      	<div>
	        	<button onClick={this.change} >{working}</button>
	        </div>
	        <div>
	        	<img  src={image[this.state.working]} alt="" />
	        </div>
	      </div>
	    );
	}



}



export default Working;