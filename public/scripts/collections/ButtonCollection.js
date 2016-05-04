import Backbone from 'backbone';
import ButtonModel from './../models/ButtonModel';

const ButtonCollection = Backbone.Collection.extend({
	model: ButtonModel,
	url: '/api/v1/buttons'
});

export default ButtonCollection;