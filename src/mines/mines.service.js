const knex = require('../db/connection')

const listMinesById = (knex, minesId) =>
  knex('buildings as b').where({ 'b.buildings_id': minesId })

const list = () => {
  return knex('buildings').select('*').orderBy('buildings_id')
}

const show = () => {
  return knex('buildings').select('*')
}

const read = (buildings_id) => {
  return knex('buildings').select('*').where({ buildings_id: buildings_id })
}

const create = (
  buildings_id,
  metal_mine_costs_per_upgrade,
  crystal_mine_costs_per_upgrade,
  deuterium_costs_per_upgrade,
  solar_plant_costs_per_upgrade,
  metal_storage_costs_per_upgrade,
  crystal_storage_costs_per_upgrade,
  deutierum_storage_costs_per_upgrade
) => {
  return knex('buildings').insert(
    buildings_id,
    metal_mine_costs_per_upgrade,
    crystal_mine_costs_per_upgrade,
    deuterium_costs_per_upgrade,
    solar_plant_costs_per_upgrade,
    metal_storage_costs_per_upgrade,
    crystal_storage_costs_per_upgrade,
    deutierum_storage_costs_per_upgrade,
    '*'
  )
}

const update = (
  metal_mine_costs_per_upgrade,
  crystal_mine_costs_per_upgrade,
  deuterium_costs_per_upgrade,
  solar_plant_costs_per_upgrade,
  metal_storage_costs_per_upgrade,
  crystal_storage_costs_per_upgrade,
  deutierum_storage_costs_per_upgrade,
  updatedBuildings
) => {
  return knex('buildings')
    .where(
      { metal_mine_costs_per_upgrade: metal_mine_costs_per_upgrade },
      { crystal_mine_costs_per_upgrade: crystal_mine_costs_per_upgrade },
      { deuterium_costs_per_upgrade: deuterium_costs_per_upgrade },
      { solar_plant_costs_per_upgrade: solar_plant_costs_per_upgrade },
      { metal_storage_costs_per_upgrade: metal_storage_costs_per_upgrade },
      { crystal_storage_costs_per_upgrade: crystal_storage_costs_per_upgrade },
      {
        deutierum_storage_costs_per_upgrade:
          deutierum_storage_costs_per_upgrade,
      }
    )
    .update(updatedBuildings)
    .returning('*')
}

const destroy = (
  buildings_id,
  metal_mine_costs_per_upgrade,
  crystal_mine_costs_per_upgrade,
  deuterium_costs_per_upgrade,
  solar_plant_costs_per_upgrade,
  metal_storage_costs_per_upgrade,
  crystal_storage_costs_per_upgrade,
  deutierum_storage_costs_per_upgrade
) => {
  return knex('buildings')
    .delete(
      buildings_id,
      metal_mine_costs_per_upgrade,
      crystal_mine_costs_per_upgrade,
      deuterium_costs_per_upgrade,
      solar_plant_costs_per_upgrade,
      metal_storage_costs_per_upgrade,
      crystal_storage_costs_per_upgrade,
      deutierum_storage_costs_per_upgrade
    )
    .returning('*')
}

module.exports = {
  list,
  show,
  read,
  create,
  listMinesById,
  update,
  destroy,
}
