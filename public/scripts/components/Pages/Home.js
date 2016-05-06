import React from 'react';
import {Link} from 'react-router';
import user from './../../models/UserModel';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user
		};
	},
	render: function() {
		if(this.state.user.get('id')) {
			return (
				<section>
					<h1>Welcome back!</h1>
					<p>Social media today is about sending out messages to entire groups of people at once and everyone responding to it, whether it be hundreds of facebook friends, twitter followers, instagram followers, etc. That's all well and good for social media, because at the end of the day, that's entirely what social media is; social. It's used to connect you with everyone you choose to follow and everyone who chooses to follow you. But there's something lost in a system that sends a message to everyone it possibly can. It loses genuine interpersonal connection for widespread connection.</p> 
					<p>This webapp is a modern twist on the idea of social media, in that it doesn't function to broadcast a message to everyone it possibly can, but rather, it functions to hide a message for whoever is looking for it. The way this app functions is by literally hiding its content through a series of buttons hidden across the page. When a button is clicked, then the contents are put onto the page, be it a message, image, .gif, or video. You can create your own account so you can make pages of contents and send them to whoever you’d like. How you style your “invisible” page is up to you, and it’s for anyone else to discover what message you’re trying to send.</p>
					<Link to={`/profile/${this.state.user.get('id')}`}>Check your Profile</Link>
				</section>
			);
		} else {
			return (
				<section>
					<h1>Welcome to In the Know!</h1>
					<p>Social media today is about sending out messages to entire groups of people at once and everyone responding to it, whether it be hundreds of facebook friends, twitter followers, instagram followers, etc. That's all well and good for social media, because at the end of the day, that's entirely what social media is; social. It's used to connect you with everyone you choose to follow and everyone who chooses to follow you. But there's something lost in a system that sends a message to everyone it possibly can. It loses genuine interpersonal connection for widespread connection.</p> 
					<p>This webapp is a modern twist on the idea of social media, in that it doesn't function to broadcast a message to everyone it possibly can, but rather, it functions to hide a message for whoever is looking for it. The way this app functions is by literally hiding its content through a series of buttons hidden across the page. When a button is clicked, then the contents are put onto the page, be it a message, image, .gif, or video. You can create your own account so you can make pages of contents and send them to whoever you’d like. How you style your “invisible” page is up to you, and it’s for anyone else to discover what message you’re trying to send.</p>
					<Link to="/login">Sign in</Link>
					<Link to="/register">Sign up</Link>
				</section>
			);
		}
	}
});