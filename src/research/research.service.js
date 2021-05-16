const knex = require('../db/connection')

const listResearchById = (knex, researchId) =>
  knex('research as rs').where({ 'rs.research_id': researchId })

const list = () => {
  return knex('research').select('*').orderBy('research_id')
}

const show = () => {
  return knex('research').select('*')
}

const read = (
  research_id,
  astrophysics_costs_per_upgrade,
  computer_tech_costs_per_upgrade,
  espionage_tech_costs_per_upgrade,
  gravitation_tech_costs_per_upgrade,
  intergalactic_research_network_costs_per_upgrade,
  energy_tech_costs_per_upgrade,
  hyperspace_tech_costs_per_upgrade,
  ion_tech_costs_per_upgrade,
  laser_tech_costs_per_upgrade,
  plasma_tech_costs_per_upgrade,
  armour_tech_costs_per_upgrade,
  shielding_tech_costs_per_upgrade,
  weapons_tech_costs_per_upgrade,
  combustion_drive_costs_per_upgrade,
  hyperspace_drive_costs_per_upgrade,
  impulse_drive_costs_per_upgrade
) => {
  return knex('research').select('*').where(
    { research_id: research_id },
    { astrophysics_costs_per_upgrade: astrophysics_costs_per_upgrade },
    { computer_tech_costs_per_upgrade: computer_tech_costs_per_upgrade },
    { espionage_tech_costs_per_upgrade: espionage_tech_costs_per_upgrade },
    {
      gravitation_tech_costs_per_upgrade: gravitation_tech_costs_per_upgrade,
    },
    {
      intergalactic_research_network_costs_per_upgrade:
        intergalactic_research_network_costs_per_upgrade,
    },
    { energy_tech_costs_per_upgrade: energy_tech_costs_per_upgrade },
    { hyperspace_tech_costs_per_upgrade: hyperspace_tech_costs_per_upgrade },
    { ion_tech_costs_per_upgrade: ion_tech_costs_per_upgrade },
    { laser_tech_costs_per_upgrade: laser_tech_costs_per_upgrade },
    { plasma_tech_costs_per_upgrade: plasma_tech_costs_per_upgrade },
    { armour_tech_costs_per_upgrade: armour_tech_costs_per_upgrade },
    { shielding_tech_costs_per_upgrade: shielding_tech_costs_per_upgrade },
    { weapons_tech_costs_per_upgrade: weapons_tech_costs_per_upgrade },
    {
      combustion_drive_costs_per_upgrade: combustion_drive_costs_per_upgrade,
    },
    {
      hyperspace_drive_costs_per_upgrade: hyperspace_drive_costs_per_upgrade,
    },
    { impulse_drive_costs_per_upgrade: impulse_drive_costs_per_upgrade }
  )
}

const create = (
  astrophysics_costs_per_upgrade,
  computer_tech_costs_per_upgrade,
  espionage_tech_costs_per_upgrade,
  gravitation_tech_costs_per_upgrade,
  intergalactic_research_network_costs_per_upgrade,
  energy_tech_costs_per_upgrade,
  hyperspace_tech_costs_per_upgrade,
  ion_tech_costs_per_upgrade,
  laser_tech_costs_per_upgrade,
  plasma_tech_costs_per_upgrade,
  armour_tech_costs_per_upgrade,
  shielding_tech_costs_per_upgrade,
  weapons_tech_costs_per_upgrade,
  combustion_drive_costs_per_upgrade,
  hyperspace_drive_costs_per_upgrade,
  impulse_drive_costs_per_upgrade
) => {
  return knex('research').insert(
    astrophysics_costs_per_upgrade,
    computer_tech_costs_per_upgrade,
    espionage_tech_costs_per_upgrade,
    gravitation_tech_costs_per_upgrade,
    intergalactic_research_network_costs_per_upgrade,
    energy_tech_costs_per_upgrade,
    hyperspace_tech_costs_per_upgrade,
    ion_tech_costs_per_upgrade,
    laser_tech_costs_per_upgrade,
    plasma_tech_costs_per_upgrade,
    armour_tech_costs_per_upgrade,
    shielding_tech_costs_per_upgrade,
    weapons_tech_costs_per_upgrade,
    combustion_drive_costs_per_upgrade,
    hyperspace_drive_costs_per_upgrade,
    impulse_drive_costs_per_upgrade,
    '*'
  )
}

const update = (
  astrophysics_costs_per_upgrade,
  computer_tech_costs_per_upgrade,
  espionage_tech_costs_per_upgrade,
  gravitation_tech_costs_per_upgrade,
  intergalactic_research_network_costs_per_upgrade,
  energy_tech_costs_per_upgrade,
  hyperspace_tech_costs_per_upgrade,
  ion_tech_costs_per_upgrade,
  laser_tech_costs_per_upgrade,
  plasma_tech_costs_per_upgrade,
  armour_tech_costs_per_upgrade,
  shielding_tech_costs_per_upgrade,
  weapons_tech_costs_per_upgrade,
  combustion_drive_costs_per_upgrade,
  hyperspace_drive_costs_per_upgrade,
  impulse_drive_costs_per_upgrade,
  updatedResearch
) => {
  return knex('research')
    .where(
      { astrophysics_costs_per_upgrade: astrophysics_costs_per_upgrade },
      { computer_tech_costs_per_upgrade: computer_tech_costs_per_upgrade },
      { espionage_tech_costs_per_upgrade: espionage_tech_costs_per_upgrade },
      {
        gravitation_tech_costs_per_upgrade: gravitation_tech_costs_per_upgrade,
      },
      {
        intergalactic_research_network_costs_per_upgrade:
          intergalactic_research_network_costs_per_upgrade,
      },
      { energy_tech_costs_per_upgrade: energy_tech_costs_per_upgrade },
      { hyperspace_tech_costs_per_upgrade: hyperspace_tech_costs_per_upgrade },
      { ion_tech_costs_per_upgrade: ion_tech_costs_per_upgrade },
      { laser_tech_costs_per_upgrade: laser_tech_costs_per_upgrade },
      { plasma_tech_costs_per_upgrade: plasma_tech_costs_per_upgrade },
      { armour_tech_costs_per_upgrade: armour_tech_costs_per_upgrade },
      { shielding_tech_costs_per_upgrade: shielding_tech_costs_per_upgrade },
      { weapons_tech_costs_per_upgrade: weapons_tech_costs_per_upgrade },
      {
        combustion_drive_costs_per_upgrade: combustion_drive_costs_per_upgrade,
      },
      {
        hyperspace_drive_costs_per_upgrade: hyperspace_drive_costs_per_upgrade,
      },
      { impulse_drive_costs_per_upgrade: impulse_drive_costs_per_upgrade }
    )
    .update(updatedResearch)
    .returning('*')
}

const destroy = (
  research_id,
  astrophysics_costs_per_upgrade,
  computer_tech_costs_per_upgrade,
  espionage_tech_costs_per_upgrade,
  gravitation_tech_costs_per_upgrade,
  intergalactic_research_network_costs_per_upgrade,
  energy_tech_costs_per_upgrade,
  hyperspace_tech_costs_per_upgrade,
  ion_tech_costs_per_upgrade,
  laser_tech_costs_per_upgrade,
  plasma_tech_costs_per_upgrade,
  armour_tech_costs_per_upgrade,
  shielding_tech_costs_per_upgrade,
  weapons_tech_costs_per_upgrade,
  combustion_drive_costs_per_upgrade,
  hyperspace_drive_costs_per_upgrade,
  impulse_drive_costs_per_upgrade
) => {
  return knex('research')
    .delete(
      research_id,
      astrophysics_costs_per_upgrade,
      computer_tech_costs_per_upgrade,
      espionage_tech_costs_per_upgrade,
      gravitation_tech_costs_per_upgrade,
      intergalactic_research_network_costs_per_upgrade,
      energy_tech_costs_per_upgrade,
      hyperspace_tech_costs_per_upgrade,
      ion_tech_costs_per_upgrade,
      laser_tech_costs_per_upgrade,
      plasma_tech_costs_per_upgrade,
      armour_tech_costs_per_upgrade,
      shielding_tech_costs_per_upgrade,
      weapons_tech_costs_per_upgrade,
      combustion_drive_costs_per_upgrade,
      hyperspace_drive_costs_per_upgrade,
      impulse_drive_costs_per_upgrade
    )
    .returning('*')
}

module.exports = {
  list,
  show,
  read,
  create,
  listResearchById,
  update,
  destroy,
}
