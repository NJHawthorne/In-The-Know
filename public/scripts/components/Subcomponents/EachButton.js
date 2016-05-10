import React from 'react';

export default React.createClass({
	render: function() {
		let iconClasses = `fa ${this.props.icon} fa-spin fa-3x`;
		let color = this.props.color;
		let topPosition = this.props.posTop;
		let leftPosition = this.props.posLeft;
		let iconStyles = {
			color: color, 
			position: 'absolute', 
			top: topPosition+'%',
			left: leftPosition+'%'
		};
		return (
			<div style={iconStyles}>
				<i className={iconClasses}/>
				<p>{this.props.buttonName}</p>
			</div>
		);
	}
});