import React from 'react';
import Rayon from 'rayon';
import BasicInfo from './../Subcomponents/BasicInfo.js';
import UsersPages from './../Subcomponents/UsersPages.js';
import user from './../../models/UserModel';
import $ from 'jquery';
import Page from './../../collections/PageCollection';
import {browserHistory} from 'react-router';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user,
			pages: [],
			pageCollection: Page,
			modalVisible: false
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
					pageName={val.pageName} 
					editable={true}/>
			);
		});
		if(this.state.user.get('id') == this.props.params.userId){
			return (
				<section>
					<BasicInfo 
						firstName={this.state.user.get('firstName')}
						lastName={this.state.user.get('lastName')}
						username={this.state.user.get('username')}
						email={this.state.user.get('email')} />
					<button className='button button-outline' type='submit' onClick={this.openModal}>Create Page</button>
					<Rayon isOpen={this.state.modalVisible} onClose={this.closeModal}>
						<form onSubmit={this.addPage}>
							<label>What's your page called?
								<input
									type='text'
									placeholder='Page name'
									required='required'
									ref='pageName' />
							</label>
							<button className='button button-outline' type='submit'>Create</button>
						</form>
					</Rayon>
					<section>
						{eachPage}
					</section>
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
					this.closeModal();
					let newId = data.get('id');
					browserHistory.push(`/edit/${newId}`);
				}
			}
		);
	},
	openModal: function() {
		this.setState({modalVisible: true});
	},
	closeModal: function() {
		this.setState({modalVisible: false});
	}
});