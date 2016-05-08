import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<div
				key={this.props.key}>
				<h1>Here is your {this.props.pageName} page!</h1>
			</div>
		);
	}
});