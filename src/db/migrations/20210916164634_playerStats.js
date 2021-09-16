exports.up = function (knex) {
  return knex.schema.createTable('player_stats', (table) => {
    table.string('player_id').primary();
    table.integer('total_points');
    table.json('total_resources_for_each_planet');
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
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('player_stats');
};
