import React from 'react';

export default React.createClass({
	render: function() {
		let iconClasses = `fa ${this.props.icon} fa-3x`;
		let color = this.props.color;
		let topPosition = this.props.posTop;
		let leftPosition = this.props.posLeft;
		let iconStyles = {};
		if(this.props.buttonName) {
			iconStyles = {
				color: color, 
				position: 'absolute', 
				top: topPosition+'%',
				left: leftPosition+'%'
			};
		} else {
			iconStyles = {
				color: color, 
				position: 'absolute', 
				top: topPosition+'%',
				left: leftPosition+'%'
			};
		}
		return (
			<div style={iconStyles} onClick={this.loadImage}>
				<i className={iconClasses} />
				<p>{this.props.position ? this.props.position : null} {this.props.buttonName ? this.props.buttonName : null}</p>
			</div>
		);
	},
	loadImage: function() {
		if(this.props.loadImage) {
			this.props.loadImage(this.props.imageUrl);	
		}
	}
});