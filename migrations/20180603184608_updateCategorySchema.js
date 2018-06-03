
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('categories', function(table) {
      table.text('tips', 'longtext');
      table.integer('parent');
    }),
    knex.schema.table('tasks', function(table) {
      table.integer('cid').unsigned().notNullable().references('cid').inTable('categories').onDelete('CASCADE').index();
    })
  ]);
};

exports.down = function(knex, Promise) {

};
