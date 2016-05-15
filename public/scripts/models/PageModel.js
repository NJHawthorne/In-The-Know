import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: {
		pageName: '',
		userId: null,
		description: ''
	},
	urlRoot: '/api/v1/page',
	idAttribute: 'id'
});