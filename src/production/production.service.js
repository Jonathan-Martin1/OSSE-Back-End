const knex = require('../db/connection')

const listFleetsById = (knex, productionId) =>
  knex('production as pr').where({ 'pr.production_id': productionId })

const list = () => {
  return knex('production').select('*').orderBy('production_id')
}

const show = () => {
  return knex('production').select('*')
}

const read = (production_id) => {
  return knex('production').select('*').where({ production_id: production_id })
}

const create = (
  production_id,
  robotics_factory_description,
  robotics_factory_costs_per_upgrade,
  shipyard_description,
  shipyard_costs_per_upgrade,
  nanomachine_description,
  nanomachine_costs_per_upgrade,
  university_description,
  university_costs_per_upgrade,
  missile_silo_description,
  missile_silo_costs_per_upgrade,
  space_port_description,
  space_post_costs_per_upgrade,
  research_lab_description,
  research_lab_costs_per_upgrade,
  terraformer_description,
  terraformer_costs_per_upgrade,
  alliance_port_description,
  alliance_port_costs_per_upgrade,
  galexy_sensor_description,
  galexy_sensor_costs_per_upgrade,
  jump_gate_description,
  jump_gate_costs_per_upgrade
) => {
  return knex('production').insert(
    production_id,
    robotics_factory_description,
    robotics_factory_costs_per_upgrade,
    shipyard_description,
    shipyard_costs_per_upgrade,
    nanomachine_description,
    nanomachine_costs_per_upgrade,
    university_description,
    university_costs_per_upgrade,
    missile_silo_description,
    missile_silo_costs_per_upgrade,
    space_port_description,
    space_post_costs_per_upgrade,
    research_lab_description,
    research_lab_costs_per_upgrade,
    terraformer_description,
    terraformer_costs_per_upgrade,
    alliance_port_description,
    alliance_port_costs_per_upgrade,
    galexy_sensor_description,
    galexy_sensor_costs_per_upgrade,
    jump_gate_description,
    jump_gate_costs_per_upgrade,
    '*'
  )
}

const update = (
  robotics_factory_costs_per_upgrade,
  shipyard_costs_per_upgrade,
  nanomachine_costs_per_upgrade,
  university_costs_per_upgrade,
  missile_silo_costs_per_upgrade,
  space_post_costs_per_upgrade,
  research_lab_costs_per_upgrade,
  terraformer_costs_per_upgrade,
  alliance_port_costs_per_upgrade,
  galexy_sensor_costs_per_upgrade,
  jump_gate_costs_per_upgrade,
  updatedProduction
) => {
  return knex('production')
    .where(
      {
        robotics_factory_costs_per_upgrade: robotics_factory_costs_per_upgrade,
      },
      { shipyard_costs_per_upgrade: shipyard_costs_per_upgrade },
      { nanomachine_costs_per_upgrade: nanomachine_costs_per_upgrade },
      { university_costs_per_upgrade: university_costs_per_upgrade },
      { missile_silo_costs_per_upgrade: missile_silo_costs_per_upgrade },
      { space_post_costs_per_upgrade: space_post_costs_per_upgrade },
      { research_lab_costs_per_upgrade: research_lab_costs_per_upgrade },
      { terraformer_costs_per_upgrade: terraformer_costs_per_upgrade },
      { alliance_port_costs_per_upgrade: alliance_port_costs_per_upgrade },
      { galexy_sensor_costs_per_upgrade: galexy_sensor_costs_per_upgrade },
      { jump_gate_costs_per_upgrade: jump_gate_costs_per_upgrade }
    )
    .update(updatedProduction)
    .returning('*')
}

const destroy = (
  production_id,
  robotics_factory_costs_per_upgrade,
  shipyard_costs_per_upgrade,
  nanomachine_costs_per_upgrade,
  university_costs_per_upgrade,
  missile_silo_costs_per_upgrade,
  space_post_costs_per_upgrade,
  research_lab_costs_per_upgrade,
  terraformer_costs_per_upgrade,
  alliance_port_costs_per_upgrade,
  galexy_sensor_costs_per_upgrade,
  jump_gate_costs_per_upgrade
) => {
  return knex('production')
    .delete(
      production_id,
      robotics_factory_costs_per_upgrade,
      shipyard_costs_per_upgrade,
      nanomachine_costs_per_upgrade,
      university_costs_per_upgrade,
      missile_silo_costs_per_upgrade,
      space_post_costs_per_upgrade,
      research_lab_costs_per_upgrade,
      terraformer_costs_per_upgrade,
      alliance_port_costs_per_upgrade,
      galexy_sensor_costs_per_upgrade,
      jump_gate_costs_per_upgrade
    )
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
