exports.up = function (knex) {
  return knex.schema.createTable('reviews', (table) => {
    table.string('review_id').primary();
    table.string('user_name');
    table.text('message');
    table.integer('rating');
    table.string('user_id');
    table
      .foreign('user_id')
      .references('user_id')
      .inTable('users')
      .onDelete('cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('reviews');
};
