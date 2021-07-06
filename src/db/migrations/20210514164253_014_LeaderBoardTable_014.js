exports.up = function (knex) {
  return knex.schema.createTable('leaderboard', (table) => {
    table.string('leaderboard_id').primary();
    table.string('player_id');
    table
      .foreign('player_id')
      .references('player_id')
      .inTable('player_stats')
      .onDelete('cascade');
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
  return knex.schema.dropTable('leaderboard');
};
