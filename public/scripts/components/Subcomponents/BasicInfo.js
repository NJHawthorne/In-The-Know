import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<section>
				<h1>This is where your basic info goes!</h1>
				<p>Your name: {this.props.firstName} {this.props.lastName}</p>
				<p>Your username: {this.props.username}</p>
				<p>Your email: {this.props.email}</p>
			</section>
		);
	}
});