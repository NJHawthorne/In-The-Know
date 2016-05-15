import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<section className='basicInfo'>
				<h1>Basic Info</h1>
				<p>Your name: <span>{this.props.firstName} {this.props.lastName}</span></p>
				<p>Your username: <span>{this.props.username}</span></p>
				<p>Your email: <span>{this.props.email}</span></p>
			</section>
		);
	}
});