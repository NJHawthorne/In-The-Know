import React from 'react';
import user from './../../models/UserModel';
import EachButton from './../subcomponents/EachButton';
import ButtonCollection from './../../collections/ButtonCollection';
import Page from './../../models/PageModel';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user,
			buttons: ButtonCollection,
			page: Page
		};
	},
	componentDidMount: function() {
		const pageId = parseInt(this.props.params.pageId);
		this.state.buttons.on('update', () => {
			this.setState({buttons: this.state.buttons});
		});
		this.state.buttons.fetch({
			data: {
				where: {
					pageId: pageId
				}
			}
		});
	},
	render: function() {
		let eachButton = this.state.buttons.map((val, i, arr) => {
				return (
					<EachButton 
						key={val.get('id')}
						buttonName={val.get('buttonName')}
						color={val.get('color')} 
						icon={val.get('icon')} 
						imageUrl={val.get('imageUrl')} 
						posLeft={val.get('posLeft')}
						posTop={val.get('posTop')} />
				);
			});
		let buttonListing = this.state.buttons.map((val, i, arr) => {
			return (
				<option key={i+1} value={val.get('id')}>{val.get('buttonName')}</option>
			);
		});
		return (
			<section>
				<div>
					<select>
						<option key={0} value="pick">Select a button</option>
						{buttonListing}
						<option key='9' value="new">Make a new button</option>
					</select>
					<form>
						<input
							type='text'
							ref='buttonName'
							placeholder='Button name' />
						<input
							type='color'
							ref='color' />
						<input 
							type='range'
							step='5'
							ref='posLeft' />
						<input 
							type='range'
							step='5'
							ref='posTop' />
						<button onClick={this.submitButton}>Submit</button>
					</form>
					<form>
						<input 
							placeholder='Page name'
							type='text'
							ref='pagename' />
						<button onClick={this.handleSave}>Save Page</button>
					</form>
				</div>
				{eachButton}
			</section>
		);
	},
	handleSave: function(e) {
		e.preventDefault();
		console.log('you tried to save the page. IT WAS ALL IN VAIN. MUAHAHAHAHAHA');
		console.log(this.state.user.get('id'));
		// this.state.pages.create({
		// 	userId: this.state.user.get('id'),
		// 	pageName: this.refs.pagename.value
		// });
	},
	submitButton: function(e) {
		e.preventDefault();
		this.state.buttons.create({
			buttonName: this.refs.buttonName.value,
			icon: 'fa-linux',
			color: this.refs.color.value,
			posLeft: this.refs.posLeft.value,
			posTop: this.refs.posTop.value,
			pageId: this.props.params.pageId
		});
	}
});