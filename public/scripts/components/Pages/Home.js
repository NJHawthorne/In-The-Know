import React from 'react';
import Rayon from 'rayon';
import user from './../../models/UserModel';
import $ from 'jquery';
import {browserHistory} from 'react-router';

export default React.createClass({
	getInitialState: function() {
		return {
			modalVisible: false,
			user: user,
			error: {}
		};
	},
	render: function() {
		return (
			<section>
				<i className='fa fa-smile-o fa-5x' onClick={this.toggleHome}/>
				<div className='home-details inactive'>
					<h1>Welcome to In the Know!</h1>
					<p>Social media today is about sending out messages to entire groups of people at once and everyone responding to it, whether it be hundreds of facebook friends, twitter followers, instagram followers, etc. That's all well and good for social media, because at the end of the day, that's entirely what social media is; social. It's used to connect you with everyone you choose to follow and everyone who chooses to follow you. But there's something lost in a system that sends a message to everyone it possibly can. It loses genuine interpersonal connection for widespread connection.</p> 
					<p>This webapp is a modern twist on the idea of social media, in that it doesn't function to broadcast a message to everyone it possibly can, but rather, it functions to hide a message for whoever is looking for it. The way this app functions is by literally hiding its content through a series of buttons hidden across the page. When a button is clicked, then you must answer a question before the contents are put onto the page. You can create your own account so you can make quizzes of your own and send them to whoever you’d like. How you style your “invisible” page is up to you, and it’s for anyone else to discover what content you're hiding.</p>
					<button onClick={this.openModal}>Sign Up</button>
				</div>
				<Rayon isOpen={this.state.modalVisible} onClose={this.closeModal} >
					<form onSubmit={this.handleRegister}>
						<label>First name
							<input
								placeholder="First name"
								ref="firstName"
								type="text"
								required="required" />
						</label>
						<label>Last name
							<input
								placeholder="Last name"
								ref="lastName"
								type="text"
								required="required" />
						</label>
						<label>Username
							<input
								placeholder="Username"
								ref="username"
								type="text"
								required="required" />
						</label>
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
							type="submit">Register</button>
					</form>
					<button onClick={this.closeModal}>Close</button>
				</Rayon>
			</section>
		);
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
	handleRegister: function(e) {
		$.ajax({
			url: '/auth/register',
			type: 'POST',
			data: {
				firstName: this.refs.firstName.value,
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
	},
	toggleHome: function() {
		$('.home-details').slideToggle('slow');
	}
});