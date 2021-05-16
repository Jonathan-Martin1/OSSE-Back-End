exports.up = function (knex) {
  return knex.schema.createTable('player_stats', (table) => {
    table.increments('player_id').primary()
    table.json('total_points')
    table.json('total_building')
    table.json('total_resources')
    table.json('total_resources_for_each_planet')
    table.integer('total_defense')
    table.integer('total_ship')
    table.json('total_research')
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
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('player_stats')
}
