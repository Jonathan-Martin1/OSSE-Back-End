exports.up = function (knex) {
  return knex.schema.createTable('store', (table) => {
    table.string('store_id').primary();
    table.string('registration_id').notNullable();
    table
      .foreign('registration_id')
      .references('registration_id')
      .inTable('registration')
      .onDelete('cascade');
    table.string('user_id');
    table
      .foreign('user_id')
      .references('user_id')
      .inTable('users')
      .onDelete('cascade');
    table.json('subscriptions_details_price');
    table.json('boosters_details_price');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('store');
};