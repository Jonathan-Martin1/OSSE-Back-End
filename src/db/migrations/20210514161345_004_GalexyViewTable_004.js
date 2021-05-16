exports.up = function (knex) {
  return knex.schema.createTable('galexy_view', (table) => {
    table.increments('galexy_view_id').primary()
    table.json('galexy_view_coordinates')
    table.json('galexy_view_fields')
    table.boolean('has_moon')
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
  return knex.schema.dropTable('galexy_view')
}
