exports.up = function (knex) {
  return knex.schema.createTable('playerFleet', (table) => {
    table.increments('player_fleet_id').primary()
    table.string('ship_name')
    table.integer('amount_of_ships')
    table.integer('total_storage_compacity')
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
  return knex.schema.dropTable('playerFleet')
}
