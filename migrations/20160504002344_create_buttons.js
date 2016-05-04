exports.up = function(knex, Promise) {
	return knex.schema.createTable('buttons', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('buttonName').nullable();
		t.integer('pageId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('pages')
			.onDelete('CASCADE');
		t.string('icon').notNull();
		t.string('color').notNull().defaultTo('black');
		t.integer('posTop').notNull().defaultTo(0);
		t.integer('posLeft').notNull().defaultTo(0);
		t.text('imageUrl').notNull().defaultTo('http://kyiv.ninja/wp-content/themes/kyiv-ninja/images/default-thumb.gif');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('buttons');
};