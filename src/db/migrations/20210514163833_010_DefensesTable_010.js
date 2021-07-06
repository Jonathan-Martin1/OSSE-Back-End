exports.up = function (knex) {
  return knex.schema.createTable('defenses', (table) => {
    table.string('defenses_id').primary();
    table.json('defense');
    table.json('amount_of_defenses');
    table.string('user_id');
    table
      .foreign('user_id')
      .references('user_id')
      .inTable('users')
      .onDelete('cascade');
    table.string('planet_id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('defenses');
};
