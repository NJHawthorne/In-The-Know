import React from 'react';
import BasicInfo from './../Subcomponents/BasicInfo.js';
import UsersPages from './../Subcomponents/UsersPages.js';
import AccountSettings from './../Subcomponents/AccountSettings.js';
import user from './../../models/UserModel';
import $ from 'jquery';
import {Link} from 'react-router';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user,
			pages: []
		};
	},
	componentDidMount: function() {
		this.pageRequest = $.get('/api/v1/page', function(data) {
			for (var i = 0; i < data.length; i++) {
				if(data[i].userId === this.state.user.get('id')) {
					this.state.pages.push({
						pageName: data[i].pageName,
						id: data[i].id
					});
				}
			}
			this.setState({pages: this.state.pages});
		}.bind(this));
	},
	render: function() {
		const rng = function() {
			const chars = '1234567890';
			let password = '';
			for (var i = 0; i < 10; i++) {
				let x = Math.floor(Math.random() * chars.length);
				password += chars.charAt(x);
			}
			return password;
		};
		let newPage = rng();
		const eachPage = this.state.pages.map((val, i, arr) => {
			return (
				<UsersPages 
					key={i}
					pageId={val.id}
					pageName={val.pageName} />
			);
		});
		if(this.state.user.get('id') == this.props.params.userId){
			return (
				<section>
					<h1>This is the Profile page!</h1>
					<BasicInfo 
						firstName={this.state.user.get('firstName')}
						lastName={this.state.user.get('lastName')}
						username={this.state.user.get('username')}/>
					<section>
						{eachPage}
						<Link to={`/create/${newPage}`}>Create a new page!</Link>
					</section>
					<AccountSettings 
						email={this.state.user.get('email')}
						id={this.state.user.get('id')}/>
				</section>
			);
		}
	}
});