exports.up = function (knex) {
  return knex.schema.createTable('planet_list', (table) => {
    table.string('planet_id').primary();
    table.string('planet_name');
    table.string('planet_coordinates');
    table.string('planet_temp_hot');
    table.string('planet_temp_cold');
    table.string('planet_fields');
    table.boolean('has_moon').notNullable();
    table.string('user_id');
    table
      .foreign('user_id')
      .references('user_id')
      .inTable('users')
      .onDelete('cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('planet_list');
};
