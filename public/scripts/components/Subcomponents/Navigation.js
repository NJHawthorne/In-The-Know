import React from 'react';
import {Link} from 'react-router';
import user from './../../models/UserModel';
import $ from 'jquery';
import {browserHistory} from 'react-router';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user
		};
	},
	render: function() {
		if(this.state.user.get('id')) {
			return (
				<nav>
					<Link to="/">Home page</Link>
					<a href="#" onClick={this.handleLogout}>Logout</a>
					<Link to={`/profile/${this.state.user.get('id')}`}>Profile page</Link>
				</nav>
			);
		} else {
			return (
				<nav>
					<Link to="/">Home page</Link>
					<Link to="/login">Login Page</Link>
					<Link to="/register">Register Page</Link>
				</nav>
			);
		}
	},
	handleLogout: function(e) {
		e.preventDefault();
		this.state.user.clear();
		$.ajax({
			type: 'POST',
			url: 'auth/logout',
			success: () => {
				browserHistory.push('/');
			}
		});
	}
});