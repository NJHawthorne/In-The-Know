require('./User');
require('./Button');
module.exports = bookshelf.model('Page', {
	tableName: 'pages',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	user: function() {
		return this.belongsTo('User', 'userId');
	},
	buttons: function() {
		return this.hasMany('Button', 'buttonId');
	}
});