import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		if (this.props.editable) {
			return (
				<div className='eachQuiz'
					key={this.props.key}>
					<div></div>
					<p>{this.props.pageName}</p>
					<p className='description'>{this.props.description}</p>
					<Link to={`/edit/${this.props.pageId}`}>Edit</Link>
					<Link to={`/content/${this.props.pageId}`}>View</Link>
				</div>
			);
		} else {
			return (
				<div className='eachQuiz'
					key={this.props.key}>
					<div></div>
					<p>{this.props.pageName}</p>
					<p className='description'>{this.props.description}</p>
					<Link to={`/content/${this.props.pageId}`}>View</Link>
				</div>
			);
		}
	}
});