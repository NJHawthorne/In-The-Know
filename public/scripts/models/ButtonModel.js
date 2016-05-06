import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: {
		buttonName: '',
		pageId: null,
		icon: '',
		color: 'black',
		posTop: 0,
		posLeft: 0,
		imageUrl: 'http://kyiv.ninja/wp-content/themes/kyiv-ninja/images/default-thumb.gif'
	},
	urlRoot: '/api/v1/button',
	idAttribute: 'id'
});