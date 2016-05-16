exports.up = function(knex, Promise) {
  	return knex.schema.table('pages', function(t) {
		t.text('description').notNull().defaultTo('This is a quiz. Enjoy it!');
	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.table('pages', function(t) {
		t.dropColumn('description');
	});
};
