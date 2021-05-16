const knex = require('../db/connection')

const listAlliancesById = (knex, allianceId) =>
  knex('alliances as a').where({ 'a.alliance_id': allianceId })

const list = () => {
  return knex('alliance').select('*').orderBy('alliance_id')
}

const show = () => {
  return knex('alliance').select('*')
}

const read = (alliance_id) => {
  return knex('alliance').select('*').where({ alliance_id: alliance_id })
}

const create = (alliance) => {
  return knex('alliance').insert(alliance, '*')
}

const update = (alliance_id, updatedAlliance) => {
  return knex('alliance')
    .where({ alliance_id: alliance_id })
    .update(updatedAlliance)
    .returning('*')
}

const destroy = (alliance) => {
  return knex('alliance').delete(alliance).returning('*')
}

module.exports = {
  list,
  show,
  read,
  create,
  listAlliancesById,
  update,
  destroy,
}
