require('./Authentication');
require('./Page');
module.exports = bookshelf.model('User', {
	tableName: 'users',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	authentication: function() {
		return this.hasMany('Authentication', 'userId');
	},
	pages: function() {
		return this.hasMany('Page', 'pageId');
	}
});