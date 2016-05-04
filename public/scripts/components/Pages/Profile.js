import React from 'react';
import BasicInfo from './../Subcomponents/BasicInfo.js';
import UsersPages from './../Subcomponents/UsersPages.js';
import AccountSettings from './../Subcomponents/AccountSettings.js';

export default React.createClass({
	render: function() {
		return (
			<section>
				<h1>This is the Profile page!</h1>
				<BasicInfo />
				<UsersPages />
				<AccountSettings />
			</section>
		);
	}
});