const knex = require('../db/connection')

const listResourcesById = (knex, resourcesId) =>
  knex('player_resources as rs').where({ 'rs.resources_id': resourcesId })

const list = () => {
  return knex('player_resources').select('*').orderBy('resources_id')
}

const show = () => {
  return knex('player_resources').select('*')
}

const read = (resources_id) => {
  return knex('player_resources')
    .select('*')
    .where(
      { resources_id: resources_id },
      { base_resources: base_resources },
      { planet_list_with_resources: planet_list_with_resources }
    )
}

const create = (resources) => {
  return knex('player_resources').insert(resources, '*')
}

const update = (resources_id, updatedResources) => {
  return knex('player_resources')
    .where(
      { resources_id: resources_id },
      { base_resources: base_resources },
      { planet_list_with_resources: planet_list_with_resources }
    )
    .update(updatedResources)
    .returning('*')
}

const destroy = (resources_id, base_resources, planet_list_with_resources) => {
  return knex('player_resources')
    .delete(resources_id, base_resources, planet_list_with_resources)
    .returning('*')
}

module.exports = {
  list,
  show,
  read,
  create,
  listResourcesById,
  update,
  destroy,
}
