import React from 'react';
import user from './../../models/UserModel';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user
		};
	},
	render: function() {
		if(this.state.user.get('id')) {
			return (
				<section>
					<h1>This is the Create page!</h1>
				</section>
			);
		}
	}
});