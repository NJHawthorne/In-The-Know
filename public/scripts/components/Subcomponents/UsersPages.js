import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div
				key={this.props.key}>
				<p>{this.props.pageName}</p>
				<Link to={`/content/${this.props.pageId}`}>View</Link>
				<Link to={`/edit/${this.props.pageId}`}>Edit</Link>
			</div>
		);
	}
});