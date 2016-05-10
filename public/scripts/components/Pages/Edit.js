import React from 'react';
import user from './../../models/UserModel';
import EachButton from './../subcomponents/EachButton';
import ButtonCollection from './../../collections/ButtonCollection';
import Page from './../../collections/PageCollection';

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
					<select onChange={this.chooseButton}>
						<option key={0} value="selectButton">Select a button</option>
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
							<select id='selectIcon'>
								<option key='0' value='selectIcon'>Pick an icon</option>
								<option key='1' value='fa-linux'>Penguin</option>
								<option key='2' value='fa-beer'>Beer</option>
								<option key='3' value='fa-diamond'>Diamond</option>
								<option key='4' value='fa-fighter-jet'>Jet</option>
								<option key='5' value='fa-globe'>Earth</option>
								<option key='6' value='fa-magic'>Magic</option>
								<option key='7' value='fa-money'>Money</option>
								<option key='8' value='fa-paper-plane'>Paper Plane</option>
								<option key='9' value='fa-trophy'>Trophy</option>
								<option key='10' value='fa-spinner'>Spinner</option>
							</select>
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
				</div>
				{eachButton}
			</section>
		);
	},
	submitButton: function(e) {
		e.preventDefault();
		this.state.buttons.create({
			buttonName: this.refs.buttonName.value,
			icon: document.getElementById('selectIcon').value,
			color: this.refs.color.value,
			posLeft: this.refs.posLeft.value,
			posTop: this.refs.posTop.value,
			pageId: this.props.params.pageId
		});
	}
});