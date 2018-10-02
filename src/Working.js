import React, { Component } from 'react';
import "./Working.css";

const image = { true : "http://www.guidedesbieres.com/photos/homer-simpsons-duff-beer.gif",
				false : "http://francescodelbuono.com/wp-content/uploads/2018/06/DesesperoSimpson.gif"};


class Working extends Component {
	constructor() {
		super();
		this.state = {
						working: false,
						countBeers: 0,
						countWorkingSec: 0
					};
	};

	change = () => {
		this.setState({ working: !this.state.working});

		if (this.state.working ===true) return this.setState({ countBeers : this.state.countBeers +1});
		else if (this.state.working ===false) return this.setState({ countWorkingSec :this.state.countWorkingSec +1});
		
	}

	render() {
		const working = this.state.working ? 'Beer' : 'Working';
		const classLogoHeader = "boutonActiv"+this.state.working.toString()
		console.log((this.state.working == 'Beer'))
		console.log(this.state.working == 'Working')
		console.log(this.state.working)

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
	        <div>
	        	<p>Homer dring {this.state.countBeers} Beers</p>
	        	<p>and work for {this.state.countWorkingSec} seconds...</p>
	        </div>

	      </div>
	    );
	}



}



export default Working;