import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<nav>
				<Link to="/">Home page</Link>
				<Link to="/profile">Profile page</Link>
				<Link to="/create">Create page</Link>
				<Link to="content">Content page</Link>
			</nav>
		);
	}
});