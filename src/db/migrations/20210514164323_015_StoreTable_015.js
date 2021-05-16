exports.up = function (knex) {
  return knex.schema.createTable('store', (table) => {
    table.increments('store_id').primary()
    table.integer('registration_id').notNullable()
    table
      .foreign('registration_id')
      .references('registration_id')
      .inTable('registration')
      .onDelete('cascade')
    table.integer('user_id')
    table
      .foreign('user_id')
      .references('user_id')
      .inTable('users')
      .onDelete('cascade')
    table.string('subscriptions')
    table.text('subscription_details')
    table.integer('subscription_price')
    table.string('boosters')
    table.text('booster_details')
    table.integer('booster_price')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('store')
}
