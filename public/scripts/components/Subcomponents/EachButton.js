import React from 'react';
import Rayon from 'rayon';

export default React.createClass({
	getInitialState: function() {
		return {
			modalVisible: false
		};
	},
	render: function() {
		let iconClasses = `fa ${this.props.icon} fa-3x`;
		let color = this.props.color;
		let topPosition = this.props.posTop;
		let leftPosition = this.props.posLeft;
		let iconStyles = {};
		if(this.props.buttonName) {
			iconStyles = {
				color: color, 
				position: 'absolute', 
				top: topPosition+'%',
				left: leftPosition+'%'
			};
		} else {
			iconStyles = {
				color: color, 
				position: 'absolute', 
				top: topPosition+'%',
				left: leftPosition+'%'
			};
		}
		return (
			<section>
				<div style={iconStyles} onClick={this.openModal}>
					<i className={iconClasses} />
					<p>{this.props.position ? this.props.position : null} {this.props.buttonName ? this.props.buttonName : null}</p>
				</div>
				<Rayon isOpen={this.state.modalVisible} onClose={this.closeModal}>
					<p>Question {this.props.position}</p>
					<p>{this.props.question}</p>
					<input
						type='text'
						placeholder='Answer...'
						ref='answer' />
					<button onClick={this.verifyAnswer}>Verify Answer</button>
				</Rayon>
			</section>
		);
	},
	loadImage: function() {
		if(this.props.loadImage) {
			this.props.loadImage(this.props.imageUrl);	
		}
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
	verifyAnswer: function(e) {
		e.preventDefault();
		let userAnswer = (this.refs.answer.value).toLowerCase;
		let correctAnswer = (this.props.answer).toLowerCase;
		if(userAnswer === correctAnswer) {
			let newPosition = this.props.position;
			console.log(typeof newPosition);
			newPosition += 1;
			this.props.loadImage(this.props.imageUrl);
			this.props.updatePosition(newPosition);
		} else {
			this.props.loadImage('http://renewaldynamics.com/wp-content/uploads/2010/06/Sad-Sack.jpg');
		}
	}
});