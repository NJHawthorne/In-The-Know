exports.up = function(knex, Promise) {
  	return knex.schema.table('buttons', function(t) {
		t.integer('position').notNull();
	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.table('buttons', function(t) {
		t.dropColumn('position');
	});
};
