import React, { Component } from "react";

class NameForm extends Component {

constructor(props) {
	super(props);
	this.state = {name: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event) {
	if (!event.target.value.includes('*')) {
		console.log(this.state.name);
		console.log(this.state.name);
	    this.setState({name: event.target.value});
	}

  }

handleSubmit(event) {

    alert('You are Looking for ' + this.state.name + '????');
    event.preventDefault();
  }


  render() {

  	

    return (
    	<div><p>-</p>

    	
    	<h3>Looking for a Simpson Character ???</h3>

	      <form onSubmit={this.handleSubmit}>

	        <label htmlFor="name" > Whitch one ? </label>

	        <input id="name" type="text" value={this.state.value} onChange={this.handleChange}/>

	        <input type="submit" value="Submit" />
	      </form>


      <h1>{this.state.name}</h1></div>
    );
  }
}

export default NameForm;