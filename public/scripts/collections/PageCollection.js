import Backbone from 'backbone';
import PageModel from './../models/PageModel';

const PageCollection = Backbone.Collection.extend({
	model: PageModel,
	url: '/api/v1/page'
});

export default new PageCollection();