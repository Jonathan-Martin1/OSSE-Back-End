exports.up = function (knex) {
  return knex.schema.createTable('ships', (table) => {
    table.string('ships_id').primary();
    table.json('ship_s');
    table.json('amount_of_ships');
    table.string('user_id');
    table
      .foreign('user_id')
      .references('user_id')
      .inTable('users')
      .onDelete('cascade');
    table.string('planet_id');
    table
      .foreign('planet_id')
      .references('planet_id')
      .inTable('planet_list')
      .onDelete('cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('ships');
};
