exports.up = function (knex) {
  return knex.schema.createTable('player_resources', (table) => {
    table.string('resources_id').primary();
    table.json('base_resources');
    table.json('planet_list_with_resources');
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
  return knex.schema.dropTable('player_resources');
};
