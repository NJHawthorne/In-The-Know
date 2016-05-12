import React from 'react';
import Rayon from 'rayon';

export default React.createClass({
	getInitialState: function() {
		return {
			modalVisible: false
		};
	},
	render: function() {
		return (
			<section>
				<h1>Welcome to In the Know!</h1>
				<button onClick={this.openModal}>Open Modal</button>
				<Rayon isOpen={this.state.modalVisible} onClose={this.closeModal} >
					<button onClick={this.closeModal}>Close</button>
				</Rayon>
			</section>
		);
	},
	openModal: function() {
		console.log('the modal was opened');
		this.setState({
			modalVisible: true
		});
	},
	closeModal: function() {
		console.log('the modal was closed');
		this.setState({
			modalVisible: false
		});
	}
});