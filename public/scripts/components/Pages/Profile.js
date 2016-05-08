import React from 'react';
import BasicInfo from './../Subcomponents/BasicInfo.js';
import UsersPages from './../Subcomponents/UsersPages.js';
import AccountSettings from './../Subcomponents/AccountSettings.js';
import user from './../../models/UserModel';
import $ from 'jquery';

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
					this.state.pages.push(data[i].pageName);
				}
			}
			this.setState({pages: this.state.pages});
		}.bind(this));
	},
	render: function() {
		console.log('render');
		console.log(this.state);
		const eachPage = this.state.pages.map((val, i, arr) => {
			return (
				<UsersPages 
					key={i}
					pageName={val} />
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
					</section>
					<AccountSettings 
						email={this.state.user.get('email')}
						id={this.state.user.get('id')}/>
				</section>
			);
		}
	}
});