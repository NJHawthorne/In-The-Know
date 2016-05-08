import React from 'react';
import buttons from './../../collections/ButtonCollection';
import $ from 'jquery';

export default React.createClass({
	getInitialState: function() {
		return {
			buttons: buttons,
			eachButton: []
		};
	},
	componentDidMount: function() {
		$.ajax({
			url: '/api/v1/button',
			method: 'get', 
			accepts: 'application/json',
			data: {
				where: {
					pageId: 2
				}
			},
			success: (data) => {
				for (var i = 0; i < data.length; i++) {
					this.state.eachButton.push({
						buttonName: data[i].buttonName,
						color: data[i].color,
						icon: data[i].icon,
						imageUrl: data[i].imageUrl,
						posLeft: data[i].posLeft,
						posTop: data[i].posTop
					});
				}
				this.setState({eachButton: this.state.eachButton});
			} 
		});
	},
	render: function() {
		console.log('render');
		console.log(this.state);
		return (
			<section>
				<h1>This is the Content page!</h1>
			</section>
		);
	}
});