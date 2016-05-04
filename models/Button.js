require('./Page');
module.exports = bookshelf.model('Button', {
	tableName: 'buttons',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	page: function() {
		return this.belongsTo('Page', 'pageId');
	}
});