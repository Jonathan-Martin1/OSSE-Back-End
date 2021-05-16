exports.up = function (knex) {
  return knex.schema.createTable('defenses', (table) => {
    table.increments('defenses_id').primary()
    table.json('defense')
    table.integer('amount_of_defenses')
    table.integer('user_id')
    table
      .foreign('user_id')
      .references('user_id')
      .inTable('users')
      .onDelete('cascade')
    table.integer('planet_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('defenses')
}
