import React from 'react';
import user from './../../models/UserModel';
import $ from 'jquery';
import {browserHistory} from 'react-router';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user,
			error: {}
		};
	},
	render: function() {
		return (
			<section>
				<form onSubmit={this.handleRegister}>
					<input
						placeholder="First name"
						ref="firstName"
						type="text"
						required="required" />
					<input
						placeholder="Last name"
						ref="lastName"
						type="text"
						required="required" />
					<input
						placeholder="Username"
						ref="username"
						type="text"
						required="required" />
					<input
						placeholder="Email"
						ref="email"
						type="text"
						required="required" />
					<input
						placeholder="Password"
						ref="password"
						type="password"
						required="required" />
					<button
						type="submit">Register</button>
				</form>
			</section>
		);
	},
	handleRegister: function(e) {
		e.preventDefault();
		$.ajax({
			url: '/auth/register',
			type: 'POST',
			data: {
				fistName: this.refs.firstName.value,
				lastName: this.refs.lastName.value,
				username: this.refs.username.value,
				email: this.refs.email.value,
				password: this.refs.password.value
			},
			headers: {
				Accept: 'application/json'
			},
			success: (newUser) => {
				this.state.user.set(newUser);
				browserHistory.push('/');
			},
			error: (err) => {
				this.setState({error: err.responseJSON});
			}
		});
	}
});