exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('user_id').primary();
    table.boolean('is_logged_in').default(false);
    table.string('user_name');
    table.string('registration_id');
    table
      .foreign('registration_id')
      .references('registration_id')
      .inTable('registration')
      .onDelete('cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
