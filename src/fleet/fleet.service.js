const knex = require('../db/connection')

const listFleetsById = (knex, fleetId) =>
  knex('playerFleet as pf').where({ 'pf.player_fleet_id': fleetId })

const list = () => {
  return knex('playerFleet').select('*').orderBy('player_fleet_id')
}

const show = () => {
  return knex('playerFleet').select('*')
}

const read = (player_fleet_id) => {
  return knex('playerFleet')
    .select('*')
    .where({ player_fleet_id: player_fleet_id })
}

const create = (ship_name, amount_of_ships, total_storage_compacity) => {
  return knex('playerFleet').insert(
    ship_name,
    amount_of_ships,
    total_storage_compacity,
    '*'
  )
}

const update = (player_fleet_id, updatedFleet) => {
  return knex('playerFleet')
    .where({ player_fleet_id: player_fleet_id })
    .update(updatedFleet)
    .returning('*')
}

const destroy = (ship_name, amount_of_ships, total_storage_compacity) => {
  return knex('playerFleet')
    .delete(ship_name, amount_of_ships, total_storage_compacity)
    .returning('*')
}

module.exports = {
  list,
  show,
  read,
  create,
  listFleetsById,
  update,
  destroy,
}
