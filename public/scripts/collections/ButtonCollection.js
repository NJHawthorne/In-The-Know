import Backbone from 'backbone';
import ButtonModel from './../models/ButtonModel';

const ButtonCollection = Backbone.Collection.extend({
	model: ButtonModel,
	url: '/api/v1/button'
});

export default ButtonCollection;