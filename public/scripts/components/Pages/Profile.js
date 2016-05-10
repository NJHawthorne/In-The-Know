import React from 'react';
import BasicInfo from './../Subcomponents/BasicInfo.js';
import UsersPages from './../Subcomponents/UsersPages.js';
import AccountSettings from './../Subcomponents/AccountSettings.js';
import user from './../../models/UserModel';
import $ from 'jquery';
import Page from './../../collections/PageCollection';
import {browserHistory} from 'react-router';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user,
			pages: [],
			pageCollection: Page
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
						<form onSubmit={this.addPage}>
							<input
								type='text'
								placeholder='Page name'
								ref='pageName' />
							<button type='submit' />
						</form>
					</section>
					<AccountSettings 
						email={this.state.user.get('email')}
						id={this.state.user.get('id')}/>
				</section>
			);
		}
	},
	addPage: function(e) {
		e.preventDefault();
		let pageName = this.refs.pageName.value;
		let userId = this.state.user.get('id');
		this.state.pageCollection.create({
			pageName: pageName,
			userId: userId
		}, {
			success: (data) => {
					console.log(data);
					let newId = data.get('id');
					browserHistory.push(`/edit/${newId}`);
				}
			}
		);
	}
});