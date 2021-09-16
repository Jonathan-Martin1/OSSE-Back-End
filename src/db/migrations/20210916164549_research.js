exports.up = function (knex) {
  return knex.schema.createTable('research', (table) => {
    table.string('research_id').primary();
    table.text('astrophysics_description');
    table.json('astrophysics_costs_per_upgrade');
    table.text('computer_tech_description');
    table.json('computer_tech_costs_per_upgrade');
    table.text('espionage_tech_description');
    table.json('espionage_tech_costs_per_upgrade');
    table.text('gravitation_tech_description');
    table.json('gravitation_tech_costs_per_upgrade');
    table.text('intergalactic_research_network_description');
    table.json('intergalactic_research_network_costs_per_upgrade');
    table.text('energy_tech_description');
    table.json('energy_tech_costs_per_upgrade');
    table.text('hyperspace_tech_description');
    table.json('hyperspace_tech_costs_per_upgrade');
    table.text('ion_tech_description');
    table.json('ion_tech_costs_per_upgrade');
    table.text('laser_tech_description');
    table.json('laser_tech_costs_per_upgrade');
    table.text('plasma_tech_description');
    table.json('plasma_tech_costs_per_upgrade');
    table.text('armour_tech_description');
    table.json('armour_tech_costs_per_upgrade');
    table.text('shielding_tech_description');
    table.json('shielding_tech_costs_per_upgrade');
    table.text('weapons_tech_description');
    table.json('weapons_tech_costs_per_upgrade');
    table.text('combustion_drive_description');
    table.json('combustion_drive_costs_per_upgrade');
    table.text('hyperspace_drive_description');
    table.json('hyperspace_drive_costs_per_upgrade');
    table.text('impulse_drive_description');
    table.json('impulse_drive_costs_per_upgrade');
    table.string('user_id');
    table
      .foreign('user_id')
      .references('user_id')
      .inTable('users')
      .onDelete('cascade');
    table.string('planet_id');
    table
      .foreign('planet_id')
      .references('planet_id')
      .inTable('planet_list')
      .onDelete('cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('research');
};