exports.up = function(knex, Promise) {
  	return knex.schema.table('buttons', function(t) {
		t.text('question').notNull();
		t.string('answer').notNull();
	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.table('users', function(t) {
		t.dropColumn('question');
		t.dropColumn('answer');
	});
};
