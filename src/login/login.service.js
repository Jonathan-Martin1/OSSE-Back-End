const knex = require('../db/connection')

const listFleetsById = (knex, fleetId) =>
  knex('users as u').where({ 'u.user_id': fleetId })

const list = () => {
  return knex('users').select('*').orderBy('user_id')
}

const show = () => {
  return knex('users').select('*')
}

const read = (user_id) => {
  return knex('users').select('*').where({ user_id: user_id })
}

const create = (user_id, is_logged_in) => {
  return knex('users').insert(
    user_id,
    is_logged_in,
    total_storage_compacity,
    '*'
  )
}

const update = (is_logged_in, updatedUser) => {
  return knex('users')
    .where({ is_logged_in: is_logged_in })
    .update(updatedUser)
    .returning('*')
}

const destroy = (user_id, is_logged_in) => {
  return knex('users').delete(user_id, is_logged_in).returning('*')
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
