import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div
				key={this.props.key}>
				<Link to={`/content/${this.props.pageId}`}>{this.props.pageName}</Link>
			</div>
		);
	}
});