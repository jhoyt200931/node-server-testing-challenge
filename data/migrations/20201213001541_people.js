
exports.up = function(knex) {
  return knex.schema
    .createTable('people', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .unique()
            .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('people');
};
