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
			page: Page,
			selectedButtonId: null
		};
	},
	componentDidMount: function() {
		const pageId = parseInt(this.props.params.pageId);
		this.state.buttons.on('update change', () => {
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
	componentWillUnmount: function() {
		console.log('unmounted');
	},
	render: function() {
		let currentButton = this.getCurrentButton();
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
					<form>
						<select ref='button' onChange={this.updateCurrentButton}>
							<option key={0} value="selectButton">Select a button</option>
							{buttonListing}
							<option key='9' value="new">Make a new button</option>
						</select>
						<input
							type='text'
							ref='buttonName'
							value={currentButton ? currentButton.get('buttonName') : null} 
							onChange={this.changeName} />
						<input
							type='color'
							ref='color' 
							value={currentButton ? currentButton.get('color') : null} 
							onChange={this.changeColor} />
							<select id='selectIcon' onChange={this.changeIcon}>
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
							ref='posLeft'
							value={currentButton ? currentButton.get('posLeft') : null} 
							onChange={this.updatePosition}/>
						<input 
							type='range'
							step='5'
							ref='posTop' 
							value={currentButton ? currentButton.get('posTop') : null} 
							onChange={this.updatePosition}/>
						<input
							type='submit'
							onClick={this.handleFilestack} />
						<button onClick={this.submitButton}>Submit</button>
					</form>
				</div>
				<div>
					<img src={currentButton ? currentButton.get('imageUrl') : null} />
				</div>
				{eachButton}
			</section>
		);
	},
	submitButton: function(e) {
		e.preventDefault();
		let currentButton = this.getCurrentButton();
		if(currentButton) {
			currentButton.save({
				buttonName: this.refs.buttonName.value,
				icon: document.getElementById('selectIcon').value,
				color: this.refs.color.value,
				posLeft: this.refs.posLeft.value,
				posTop: this.refs.posTop.value,
				pageId: this.props.params.pageId
			});
		} else {
			this.state.buttons.create({
				buttonName: this.refs.buttonName.value,
				icon: document.getElementById('selectIcon').value,
				color: this.refs.color.value,
				posLeft: this.refs.posLeft.value,
				posTop: this.refs.posTop.value,
				pageId: this.props.params.pageId
			});
		}
	},
	updatePosition: function() {
		let currentButton = this.getCurrentButton();
		if(currentButton) {
			currentButton.set({
				posLeft: this.refs.posLeft.value,
				posTop: this.refs.posTop.value
			});
		}
	},
	getCurrentButton: function() {
		if(this.state.selectedButtonId) {
			return this.state.buttons.get(this.state.selectedButtonId);
		} else {
			return false;
		}
	},
	updateCurrentButton: function() {
		this.setState({selectedButtonId: this.refs.button.value});
	},
	changeName: function(e) {
		let currentButton = this.getCurrentButton();
		if(currentButton) {
			currentButton.set({
				buttonName: e.target.value
			});
		}
	},
	changeColor: function(e) {
		let currentButton = this.getCurrentButton();
		if(currentButton) {
			currentButton.set({
				color: e.target.value
			});
		}
	},
	changeIcon: function(e) {
		let currentButton = this.getCurrentButton();
		if(currentButton) {
			currentButton.set({
				icon: e.target.value
			});
		}
	},
	handleFilestack: function(e) {
		e.preventDefault();
		let currentButton = this.getCurrentButton();
		console.log(currentButton);
		filepicker.setKey('ABF95lzYQqNV2ewYLYYQyz');
 		filepicker.pick({
		    	mimetype: 'image/*',
		    	container: 'window',
		    	services: ['COMPUTER', 'FACEBOOK', 'CLOUDAPP']
		   	},
		   	(test) => {
		     	console.log(test.url);
		     	currentButton.set({
		     		imageUrl: test.url
		     	});
		   	},
		   	function(FPError){
		  		console.log(FPError.toString()); //- print errors to console
		   	}
		); 
	}
});