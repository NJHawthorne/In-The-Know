import React from 'react';
import user from './../../models/UserModel';
import $ from 'jquery';

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
				<form onSubmit={this.handleLogin}>
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
						type="submit">Login</button>
				</form>
			</section>
		);
	},
	handleLogin: function(e) {
		e.preventDefault();
		console.log('You pressed the new login button!');
		console.log(this.state);
		$.ajax({
			url: 'auth/login',
			type: 'POST',
			data: {
				email: this.refs.email.value,
			password: this.refs.password.value
			},
			headers: {
				Accept: 'application/json'
			},
			success: (login) => {
				this.state.user.set(login);
				console.log('IT WORKED! :D');
			},
			error: (err) => {
				this.setState({error: err.responseJSON});
			}
		});
	}
});