const knex = require('../db/connection')

const listGalexyViewById = (knex, galexyViewId) =>
  knex('galexy_view as gv').where({ 'gv.galexy_view_id': galexyViewId })

const list = () => {
  return knex('galexy_view').select('*').orderBy('galexy_view_id')
}

const show = () => {
  return knex('galexy_view').select('*')
}

const read = (galexy_view_id) => {
  return knex('galexy_view')
    .select('*')
    .where({ galexy_view_id: galexy_view_id })
}

const create = (ship_name, amount_of_ships, total_storage_compacity) => {
  return knex('galexy_view').insert(
    ship_name,
    amount_of_ships,
    total_storage_compacity,
    '*'
  )
}

const update = (galexy_view_id, updatedGalexyView) => {
  return knex('galexy_view')
    .where({ galexy_view_id: galexy_view_id })
    .update(updatedGalexyView)
    .returning('*')
}

const destroy = (ship_name, amount_of_ships, total_storage_compacity) => {
  return knex('galexy_view')
    .delete(ship_name, amount_of_ships, total_storage_compacity)
    .returning('*')
}

module.exports = {
  list,
  show,
  read,
  create,
  listGalexyViewById,
  update,
  destroy,
}
