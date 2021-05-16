exports.up = function (knex) {
  return knex.schema.createTable('alliance', (table) => {
    table.increments('alliance_id').primary()
    table.string('alliance_name')
    table.string('description')
    table.integer('user_id')
    table
      .foreign('user_id')
      .references('user_id')
      .inTable('users')
      .onDelete('cascade')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('alliance')
}
