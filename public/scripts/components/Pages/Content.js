import React from 'react';
import buttons from './../../collections/ButtonCollection';
import $ from 'jquery';
import EachButton from './../subcomponents/EachButton';

export default React.createClass({
	getInitialState: function() {
		return {
			buttons: buttons,
			eachButton: [],
			errorFlag: false
		};
	},
	componentDidMount: function() {
		const pageId = parseInt(this.props.params.pageId);
		if(this.state.eachButton.length === 0) {
			$.ajax({
				url: '/api/v1/button',
				method: 'get', 
				accepts: 'application/json',
				data: {
					where: {
						pageId: pageId
					}
				},
				success: (data) => {
					if(data == false) {
						this.setState({errorFlag: true});
					} else {
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
				}
			});
		}
	},
	render: function() {
		if(this.state.errorFlag) {
			return (
				<section>
					<h1>This is the not a page. You've been lied to. Ha ha.</h1>
				</section>
			);
		} else {
			let eachButton = this.state.eachButton.map((val, i, arr) => {
				return (
					<EachButton 
						key={i}
						buttonName={val.buttonName}
						color={val.color} 
						icon={val.icon} 
						imageUrl={val.imageUrl} 
						posLeft={val.posLeft}
						posTop={val.posTop} />
				);
			});
			return (
				<section>
					{eachButton}
				</section>
			);
		}
	}
});