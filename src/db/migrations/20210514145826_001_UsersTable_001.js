exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('user_id').primary()
    table.boolean('is_logged_in')
    table.string('user_name')
    table.integer('registration_id')
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
