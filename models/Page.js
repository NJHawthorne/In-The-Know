require('./User');
module.exports = bookshelf.model('Page', {
	tableName: 'pages',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	user: function() {
		return this.belongsTo('User', 'userId');
	}
});