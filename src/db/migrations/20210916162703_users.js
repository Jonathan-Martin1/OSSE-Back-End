exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('user_id').primary()
    table.string('user_name')
    table.string('login_token')
    table.string('registration_id')
    table.timestamp('first_login').defaultTo(knex.fn.now())
    table
      .foreign('registration_id')
      .references('registration_id')
      .inTable('registration')
      .onDelete('cascade')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
