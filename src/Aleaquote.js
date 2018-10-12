import React, { Component } from 'react';

class Aleaquote extends Component {

	constructor(props) {
    super(props);
     this.state = {items: []}

     }

     componentDidMount() {

     	fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=10')
     	 .then(response => response.json())
     	 .then( json => {
     	 	this.setState({ count: 0,
			     	 		items: json
			     	 		})
     	 })
     	}


 	Roulette = () => {
 		this.setState({count: Math.floor(Math.random() * (9) + 1)})
 	}
 
	render() {
		const count = this.state.count
		const items = this.state.items
		const quote = items.map(item => item.quote)[this.state.count]
		const character = items.map(item => item.character)[this.state.count]
		const image = items.map(item => item.image)[this.state.count]

		return(
			<div>
				<button onClick={this.Roulette}>An other quote</button>
				<h5>{quote}</h5>
				<h6> dixit :{character}</h6>
				<img src={image} />
			</div>
			)
	}
}

export default Aleaquote;



