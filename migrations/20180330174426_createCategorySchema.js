
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('categories', function(table) {
      table.increments('cid').primary();
      table.string('title');
      table.text('description', 'longtext');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('categories'),
    knex.schema.dropTable('category_data'),
    knex.schema.dropTable('category_costs')
  ]);
};
