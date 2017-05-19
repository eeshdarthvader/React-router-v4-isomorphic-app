/**
 * Gist.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
export default ({ gist }) => (
    <div>
        <h1>{gist.name || '[no description]'}</h1>
    </div>
);
*/



class Gist extends React.Component {
	
	
	constructor(props,context){
		super(props,context);
		
		this.state = {players:[]} || props.players ;
		
		
		
	}



	componentWillMount() {
	  	console.log("In componentWillMount");	
	  
	 }  
	
	
	componentDidMount(prevProps, prevState){

			console.log('players props' + this.props.players);
		
			if(this.props.players == "")
			{
				var url=`/api/matches/${this.props.gist._links.self.href.substring(this.props.gist._links.self.href.lastIndexOf('/') + 1)}`;
		
				console.log("In componentdidmount");
		
				fetch(`/api/matches/${this.props.gist._links.self.href.substring(this.props.gist._links.self.href.lastIndexOf('/') + 1)}`)
				.then(response => response.json())
			    .then(result => this.setState({players:result.players.players}))
			}
			else
			{
				this.setState({players:this.props.players.players})
			}	
		
		
	}
	
	
	
	componentDidUpdate(prevProps, prevState){


		
		if (prevProps.gist !== this.props.gist) {
		
			var url=`/api/matches/${this.props.gist._links.self.href.substring(this.props.gist._links.self.href.lastIndexOf('/') + 1)}`;
		
			console.log("In componentDidUpdate");
		
			fetch(`/api/matches/${this.props.gist._links.self.href.substring(this.props.gist._links.self.href.lastIndexOf('/') + 1)}`)
				.then(response => response.json())
				.then(result => this.setState({players:result.players.players}))
		}
		
		
	}
	
	createPlayer(player,index){
		
		return(
			<tr key={index}>
 				<td >{player.name}</td>
 				<td >{player.position}</td>
 				<td >{player.nationality}</td>
 			</tr>
		);
	}
	
	render(){
		

		
		return(
			<div>
		        
		        
		        <table className="table">
				    <thead>
				      <tr>
				        <th>Player Name</th>
				        <th>Position</th>
				        <th>Nationality</th>
				      </tr>
				    </thead>
				    <tbody>
				      
				        {this.state.players?this.state.players.map(this.createPlayer):"Loading..."}
				         
				     </tbody>
				  </table>
		    </div>
			
		);
		
	}
	
	
}



export default Gist;