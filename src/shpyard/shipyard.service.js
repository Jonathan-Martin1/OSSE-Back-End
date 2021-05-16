const knex = require('../db/connection')

const listShipsById = (knex, shipsId) =>
  knex('ships as s').where({ 's.ships_id': shipsId })

const list = () => {
  return knex('ships').select('*').orderBy('ships_id')
}

const show = () => {
  return knex('ships').select('*')
}

const read = (ships_id) => {
  return knex('ships')
    .select('*')
    .where(
      { ships_id: ships_id },
      { ship_s: ship_s },
      { amount_of_ships: amount_of_ships }
    )
}

const create = (ships) => {
  return knex('ships').insert(ships, '*')
}

const update = (ships_id, updatedShips) => {
  return knex('ships')
    .where(
      { ships_id: ships_id },
      { ship_s: ship_s },
      { amount_of_ships: amount_of_ships }
    )
    .update(updatedShips)
    .returning('*')
}

const destroy = (ships_id, ship_s, amount_of_ships) => {
  return knex('ships').delete(ships_id, ship_s, amount_of_ships).returning('*')
}

module.exports = {
  list,
  show,
  read,
  create,
  listShipsById,
  update,
  destroy,
}
