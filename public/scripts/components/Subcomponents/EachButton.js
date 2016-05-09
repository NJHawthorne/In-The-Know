import React from 'react';

export default React.createClass({
	render: function() {
		let iconClasses = `fa ${this.props.icon} fa-5x`;
		let color = this.props.color;
		let topPosition = this.props.posTop;
		let leftPosition = this.props.posLeft;
		let iconStyles = {
			color: color, 
			position: 'absolute', 
			top: topPosition+'rem',
			left: leftPosition+'rem'
		};
		return (
			<div style={iconStyles}>
				<i className={iconClasses}/>
				<p>{this.props.buttonName}</p>
			</div>
		);
	}
});