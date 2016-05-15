exports.up = function(knex, Promise) {
  	return knex.schema.table('pages', function(t) {
		t.text('description').notNull();
	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.table('pages', function(t) {
		t.dropColumn('description');
	});
};
