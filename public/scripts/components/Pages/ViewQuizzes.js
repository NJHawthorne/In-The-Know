import React from 'react';
import Page from './../../collections/PageCollection';
import UsersPages from './../Subcomponents/UsersPages.js';

export default React.createClass({
	getInitialState: function() {
		return {
			page: Page
		};
	},
	componentDidMount: function() {
		this.state.page.on('update', () => {
			this.setState({page: this.state.page});
		});
		this.state.page.fetch();
	},
	render: function() {
		let eachQuiz = this.state.page.map((val, i, arr) =>{
			return (
				<UsersPages
					key={i}
					pageName={val.get('pageName')} 
					pageId={val.get('id')}
					description={val.get('description')}/>
			);
		});
		return (
			<section>
				<h1 className='viewQuizzes'>Quizzes</h1>
				{eachQuiz}
			</section>
		);
	}
});