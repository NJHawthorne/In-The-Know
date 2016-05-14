import React from 'react';
import Rayon from 'rayon';
import {Link} from 'react-router';
import user from './../../models/UserModel';
import $ from 'jquery';
import {browserHistory} from 'react-router';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user,
			modalVisible: false
		};
	},
	render: function() {
		if(this.state.user.get('id')) {
			return (
				<nav>
					<Link to="/">Home page</Link>
					<Link to={`/profile/${this.state.user.get('id')}`}>Profile page</Link>
					<Link to="/quizzes">View Quizzes</Link>
					<a href="#" onClick={this.handleLogout}>Logout</a>
				</nav>
			);
		} else {
			return (
				<nav>
					<Link to="/">Home page</Link>
					<Link to="/quizzes">View Quizzes</Link>
					<a href="#" onClick={this.openModal}>Login</a>
					<Rayon isOpen={this.state.modalVisible} onClose={this.closeModal}>
						<form onSubmit={this.handleLogin}>
							<label>Email Address
								<input
									placeholder="Email"
									ref="email"
									type="text"
									required="required" />
							</label>
							<label>Password
								<input
									placeholder="Password"
									ref="password"
									type="password"
									required="required" />
							</label>
							<button
								className='button button-outline'
								type="submit">Login</button>
						</form>
						<button onClick={this.closeModal}>Close</button>
					</Rayon>
				</nav>
			);
		}
	},
	openModal: function() {
		this.setState({
			modalVisible: true
		});
	},
	closeModal: function() {
		this.setState({
			modalVisible: false
		});
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
	},
	handleLogin: function(e) {
		e.preventDefault();
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
				browserHistory.push('/');
			},
			error: (err) => {
				this.setState({error: err.responseJSON});
			}
		});
	}
});