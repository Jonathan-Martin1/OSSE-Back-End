exports.up = function (knex) {
  return knex.schema.createTable('player_resources', (table) => {
    table.increments('resources_id').primary()
    table.json('base_resources')
    table.json('planet_list_with_resources')
    table.integer('user_id')
    table
      .foreign('user_id')
      .references('user_id')
      .inTable('users')
      .onDelete('cascade')
    table.integer('planet_id')
    table
      .foreign('planet_id')
      .references('planet_id')
      .inTable('planet_list')
      .onDelete('cascade')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('player_resources')
}
