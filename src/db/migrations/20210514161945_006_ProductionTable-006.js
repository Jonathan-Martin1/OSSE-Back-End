exports.up = function (knex) {
  return knex.schema.createTable('production', (table) => {
    table.increments('production_id').primary()
    //robotics factory
    table.text('robotics_factory_description')
    table.json('robotics_factory_costs_per_upgrade')
    //shipyard
    table.text('shipyard_description')
    table.json('shipyard_costs_per_upgrade')
    //nanomachine
    table.text('nanomachine_description')
    table.json('nanomachine_costs_per_upgrade')
    //university
    table.text('university_description')
    table.json('university_costs_per_upgrade')
    //missile silo
    table.text('missile_silo_description')
    table.json('missile_silo_costs_per_upgrade')
    //space port
    table.text('space_port_description')
    table.json('space_port_costs_per_upgrade')
    //research lab
    table.text('research_lab_description')
    table.json('research_lab_costs_per_upgrade')
    // terraformer
    table.text('terraformer_description')
    table.json('terraformer_costs_per_upgrade')
    // alliance port
    table.text('alliance_port_description')
    table.json('alliance_port_costs_per_upgrade')
    //galexy sensor
    table.text('galexy_sensor_description')
    table.json('galexy_sensor_costs_per_upgrade')
    //jump gate
    table.text('jump_gate_description')
    table.json('jump_gate_costs_per_upgrade')
    //foreign key
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
  return knex.schema.dropTable('production')
}
