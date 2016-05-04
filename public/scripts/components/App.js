import React from 'react';
import Nav from './subcomponents/Navigation.js';

export default React.createClass({
	render: function() {
		return (
			<section>
				<Nav />
				{this.props.children}
			</section>
		);
	}
});