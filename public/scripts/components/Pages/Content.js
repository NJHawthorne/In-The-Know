import React from 'react';
import buttons from './../../collections/ButtonCollection';
import EachButton from './../subcomponents/EachButton';

export default React.createClass({
	getInitialState: function() {
		return {
			buttons: buttons,
			errorFlag: false,
			currentImage: '',
			position: 1
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
			},
			success: (data) => {
				if(data.length < 1) {
					this.setState({errorFlag: true});
				}
			}
		});	
	},
	componentWillUnmount: function() {
		this.state.buttons.off('update');
	},
	render: function() {
		if(this.state.errorFlag) {
			return (
				<section>
					<h1>This is the not a page. You've been lied to. Ha ha.</h1>
					<audio src='/media/Incorrect_Page.wav' loop='true' autoPlay='true'/>
					<img src="http://media.giphy.com/media/hTh9bSbUPWMWk/giphy.gif" />
				</section>
			);
		} else {
			let answeredButtons = this.state.buttons.filter((val, i, arr) => {
				if(!val.get('position') | val.get('position') > this.state.position) {
					return false;
				} else {
					return true;
				}
			});
			let eachButton = answeredButtons.map((val, i, arr) => {
				return (
					<EachButton 
						loadImage={this.loadImage}
						updatePosition={this.updatePosition}
						position={val.get('position')}
						question={val.get('question')}
						answer={val.get('answer')}
						key={val.get('id')}
						color={val.get('color')} 
						icon={val.get('icon')} 
						imageUrl={val.get('imageUrl')} 
						posLeft={val.get('posLeft')}
						posTop={val.get('posTop')} />
				);
			});
			return (
				<section>
					{eachButton}
					<div>
						<img src={this.state.currentImage ? this.state.currentImage : 'http://www.htmlcsscolor.com/preview/gallery/EFEFEF.png'} />
					</div>
				</section>
			);
		}
	},
	loadImage: function(imageUrl) {
		this.setState({currentImage: imageUrl});
	},
	updatePosition: function(newPosition) {
		this.setState({position: newPosition});
	}
});