exports.up = function (knex) {
  return knex.schema.createTable('buildings', (table) => {
    table.string('buildings_id').primary();
    //metal mine
    table.text('metal_mine_description');
    table.json('metal_mine_costs_per_upgrade');
    //crystal mine
    table.text('crystal_mine_description');
    table.json('crystal_mine_costs_per_upgrade');
    //deuterium synth
    table.text('deuterium_description');
    table.json('deuterium_costs_per_upgrade');
    //solar plant
    table.text('solar_plant_description');
    table.json('solar_plant_costs_per_upgrade');
    //where storages
    table.text('metal_storage_description');
    table.json('metal_storage_costs_per_upgrade');
    //crystal storage
    table.text('crystal_storage_description');
    table.json('crystal_storage_costs_per_upgrade');
    //deuterium storage
    table.text('deuterium_storage_description');
    table.json('deuterium_storage_costs_per_upgrade');
    //foreign key
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
  return knex.schema.dropTable('buildings');
};