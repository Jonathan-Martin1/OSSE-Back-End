
exports.up = function(knex) {
  return knex.schema.createTable('login', (table) => {
   table.string('login_id').primary();
   table.string('login_token');
   table.string('user_id');
   table
     .foreign('user_id')
     .references('user_id')
     .inTable('users')
     .onDelete('cascade');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('login')
};
