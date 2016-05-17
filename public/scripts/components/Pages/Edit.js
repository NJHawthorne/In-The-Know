import React from 'react';
import user from './../../models/UserModel';
import EachButton from './../subcomponents/EachButton';
import ButtonCollection from './../../collections/ButtonCollection';
import Page from './../../collections/PageCollection';
import Rayon from 'rayon';
import $ from 'jquery';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user,
			buttons: ButtonCollection,
			page: Page,
			selectedButtonId: null,
			modalVisible: false,
			selectedIcon: ''
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
		this.state.buttons.off('update change');
	},
	render: function() {
		let currentButton = this.getCurrentButton();
		let eachButton = this.state.buttons.map((val, i, arr) => {
				return (
					<EachButton 
						key={val.get('id')}
						position={val.get('position')}
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
			<section className='editPage'>
				<div className='filters'>
					<div className='buttonSelect'>
						<p>Select a button or Make a new one!</p>
						<select ref='button' onChange={this.updateCurrentButton}>
							<option key={0} value="selectButton">Select a button</option>
							{buttonListing}
						</select>
						<button onClick={this.openModal}>Add Question</button>
						<div className='divider'></div>
					</div>
					<div>
						<p>Name and Icon<i className="fa fa-arrow-down" onClick={this.toggleName}/></p>
						<div className='nameColorIcon inactive'>
							<label>Button Name:
								<input
									type='text'
									ref='buttonName'
									value={currentButton ? currentButton.get('buttonName') : null} 
									onChange={this.changeName} />
							</label>
							<label>Color:
								<input
									type='color'
									ref='color'
									className='colorInput' 
									value={currentButton ? currentButton.get('color') : null} 
									onChange={this.changeColor} />
							</label>
							<label>Icon: 
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
							</label>
						</div>
						<div className='divider'></div>
					</div>
					<div>
						<p>Order and Position<i className="fa fa-arrow-down" onClick={this.toggleOrder}/></p>
						<div className='orderPosition inactive'>
							<label>Order:
							<input 
								type='number'
								ref='position'
								className='number'
								value={currentButton ? currentButton.get('position') : null}
								onChange={this.updateOrder} />
							</label>
							<label className='x-axis'>X-Axis Position:
							<input 
								className='range x-axis'
								type='range'
								step='3'
								ref='posLeft'
								min='43'
								max='96'
								value={currentButton ? currentButton.get('posLeft') : null} 
								onChange={this.updatePosition}/>
							</label>
							<label className='y-axis'>Y-Axis Position:
							<input 
								className='range2'
								type='range'
								step='5'
								ref='posTop' 
								value={currentButton ? currentButton.get('posTop') : null} 
								onChange={this.updatePosition}/>
							</label>
						</div>	
					</div>
					<div className='divider'></div>
					<div>
						<p>Image and Question/Answer<i className="fa fa-arrow-down" onClick={this.toggleImg}/></p>
						<div className='imageQuestion inactive'>
							<button
								type='submit'
								onClick={this.handleFilestack}>Upload File</button>
							<label>Question:
								<input
									type='text'
									ref='question'
									placeholder='Question'
									value={currentButton ? currentButton.get('question') : null}
									onChange={this.modifyQuestion} />
							</label>
							<label>Answer:
								<input
									type='text'
									ref='answer'
									placeholder='Answer'
									value={currentButton ? currentButton.get('answer') : null}
									onChange={this.modifyAnswer} />
							</label>
						</div>
					</div>
				</div>
				<p>{currentButton ? currentButton.get('question') : null}</p>
				<p>{currentButton ? currentButton.get('answer') : null}</p>
				<Rayon isOpen={this.state.modalVisible} onClose={this.closeModal}>
					<form>
						<label>Button Name
							<input
								type='text'
								ref='buttonName'
								value={currentButton ? currentButton.get('buttonName') : null} 
								onChange={this.changeName} />
						</label>
						<label>
							<input
								type='color'
								ref='color' 
								value={currentButton ? currentButton.get('color') : null} 
								onChange={this.changeColor} />
						</label>
						<select id='selectIcon' onChange={this.updateIcon}>
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
						<button onClick={this.submitButton}>Submit</button>
					</form>
				</Rayon>
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
				icon: this.state.selectedIcon,
				color: this.refs.color.value,
				posLeft: this.refs.posLeft.value,
				posTop: this.refs.posTop.value,
				pageId: this.props.params.pageId
			});
		} else {
			this.state.buttons.create({
				buttonName: this.refs.buttonName.value,
				icon: this.state.selectedIcon,
				color: this.refs.color.value,
				posLeft: this.refs.posLeft.value,
				posTop: this.refs.posTop.value,
				pageId: this.props.params.pageId
			});
			this.closeModal();
		}
	},
	updatePosition: function() {
		let currentButton = this.getCurrentButton();
		if(currentButton) {
			currentButton.save({
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
			currentButton.save({
				buttonName: e.target.value
			});
		}
	},
	changeColor: function(e) {
		let currentButton = this.getCurrentButton();
		if(currentButton) {
			currentButton.save({
				color: e.target.value
			});
		}
	},
	changeIcon: function(e) {
		let currentButton = this.getCurrentButton();
		if(currentButton) {
			currentButton.save({
				icon: e.target.value
			});
		}
	},
	updateOrder: function(e) {
		let currentButton = this.getCurrentButton();
		if(currentButton) {
			currentButton.save({
				position: e.target.value
			});
		}
	},
	modifyQuestion: function(e) {
		let currentButton = this.getCurrentButton();
		if(currentButton) {
			currentButton.save({
				question: e.target.value
			});
		}
	},
	modifyAnswer: function(e) {
		let currentButton = this.getCurrentButton();
		if(currentButton) {
			currentButton.save({
				answer: e.target.value
			});
		}
	},
	handleFilestack: function(e) {
		e.preventDefault();
		let currentButton = this.getCurrentButton();
		filepicker.setKey('ABF95lzYQqNV2ewYLYYQyz');
 		filepicker.pick({
		    	mimetype: 'image/*',
		    	container: 'modal',
		    	services: ['COMPUTER']
		   	},
		   	(test) => {
		     	currentButton.save({
		     		imageUrl: test.url
		     	});
		   	},
		   	function(FPError){
		  		console.log(FPError.toString());
		   	}
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
	updateIcon: function(e) {
		this.setState({selectedIcon: e.target.value});
	},
	toggleName: function() {
		$('.nameColorIcon').slideToggle('slow');
	},
	toggleOrder: function() {
		$('.orderPosition').slideToggle('slow');
	},
	toggleImg: function() {
		$('.imageQuestion').slideToggle('slow');
	}
});