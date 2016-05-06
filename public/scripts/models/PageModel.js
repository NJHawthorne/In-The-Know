import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: {
		pageName: '',
		userId: null
	},
	urlRoot: '/api/v1/page',
	idAttribute: 'id'
});