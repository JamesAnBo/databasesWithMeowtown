
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('Cats', function (table) {
    table.increments('id');
    table.string('name');
    table.integer('personId');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Cats')
};
