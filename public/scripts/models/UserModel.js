import Backbone from 'backbone';

const UserModel = Backbone.Model.extend({
	defaults: {
		createdAt: null,
		updatedAt: null,
		firstName: '',
		lastName: '',
		email: '',
		username: ''
	},
	urlRoot: '/api/v1/users',
	idAttribute: 'id' 
});

export default new UserModel();