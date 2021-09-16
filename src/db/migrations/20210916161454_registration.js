exports.up = function (knex) {
  return knex.schema.createTable('registration', (table) => {
    table.string('registration_id').primary();
    table.string('username');
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('password');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('registration');
};
