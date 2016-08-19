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
		let position = this.props.position;
		if(position < this.props.currentPosition) {
			iconClasses = `fa ${this.props.icon} fa-3x fa-spin`;
		}
		let iconStyles = {
			color: color, 
			position: 'absolute', 
			top: topPosition+'%',
			left: leftPosition+'%',
			padding: '1.25em',
			border: position==this.props.currentPosition ? `5px solid ${color}` : null,
			borderRadius: position==this.props.currentPosition ? `50%` : null
		};
		if(position == this.props.currentPosition) {
			iconStyles.border = '2px solid '+color;
			iconStyles.border_radius= '50%';
		}
		if(this.props.updatePosition) {
			return (
				<section>
					<div style={iconStyles} onClick={this.openModal}>
						<i className={iconClasses} />
					</div>
					<Rayon isOpen={this.state.modalVisible} onClose={this.closeModal}>
						<p>Question {this.props.position}</p>
						<label>{this.props.question}
							<input
								type='text'
								placeholder='Answer...'
								ref='answer' />
						</label>
						<button onClick={this.verifyAnswer}>Verify Answer</button>
					</Rayon>
				</section>
			);
		} else {
			return (
				<div style={iconStyles}>
					<i className={iconClasses} />
					<p>{this.props.position ? this.props.position : null} {this.props.buttonName ? this.props.buttonName : null}</p>
				</div>
			);
		}
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
		let userAnswer = this.refs.answer.value.toLowerCase();
		let correctAnswer = this.props.answer.toLowerCase();
		if(userAnswer === correctAnswer) {
			let newPosition = this.props.position;
			newPosition += 1;
			this.props.loadImage(this.props.imageUrl);
			this.props.updatePosition(newPosition);
		} else {
			this.props.loadImage('http://renewaldynamics.com/wp-content/uploads/2010/06/Sad-Sack.jpg');
		}
		this.closeModal();
	}
});