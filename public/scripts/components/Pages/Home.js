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
				<i className='fa fa-smile-o fa-5x' onClick={this.toggleHome} onMouseEnter={this.addSpin} onMouseLeave={this.removeSpin}/>
				<div className='home-details inactive'>
					<h1>Welcome to In the Know!</h1>
					<p>In the Know is a entertainment Webapp that allows users to create quizzes for their friends through a series of button-like icons around the page. The quizzes are fundamentally simple; you click an icon, then you are given a question that you get to answer. If you answer correctly, a new icon appears, and the image associated with that question pops up on the page. Regular users can take as many quizzes as they'd like, while logged-in users can additionally make their own quizzes, customizing everything from icon placement, color, and icon, to the question, answer, and associated image.</p> 
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
	},
	addSpin: function() {
		$('.fa-smile-o').addClass('fa-spin');
	},
	removeSpin: function() {
		$('.fa-smile-o').removeClass('fa-spin');
	}
});