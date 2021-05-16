const service = require('./research.service')
const wrapper = require('../errors/asyncErrorBoundary')

const list = async (req, res, next) => {
  const {
    research_id,
    astrophysics_description,
    astrophysics_costs_per_upgrade,
    computer_tech_description,
    computer_tech_costs_per_upgrade,
    espionage_tech_description,
    espionage_tech_costs_per_upgrade,
    gravitation_tech_description,
    gravitation_tech_costs_per_upgrade,
    intergalactic_research_network_description,
    intergalactic_research_network_costs_per_upgrade,
    energy_tech_description,
    energy_tech_costs_per_upgrade,
    hyperspace_tech_description,
    hyperspace_tech_costs_per_upgrade,
    ion_tech_description,
    ion_tech_costs_per_upgrade,
    laser_tech_description,
    laser_tech_costs_per_upgrade,
    plasma_tech_description,
    plasma_tech_costs_per_upgrade,
    armour_tech_description,
    armour_tech_costs_per_upgrade,
    shielding_tech_description,
    shielding_tech_costs_per_upgrade,
    weapons_tech_description,
    weapons_tech_costs_per_upgrade,
    combustion_drive_description,
    combustion_drive_costs_per_upgrade,
    hyperspace_drive_description,
    hyperspace_drive_costs_per_upgrade,
    impulse_drive_description,
    impulse_drive_costs_per_upgrade,
  } = req.query
  const data = await service.list(req.query)
  if (astrophysics_description) {
    const data = await service.list(astrophysics_description)
    res.json({
      data: astrophysics_description,
    })
    return
  }
  if (astrophysics_costs_per_upgrade) {
    const data = await service.list(astrophysics_costs_per_upgrade)
    res.json({
      data: astrophysics_costs_per_upgrade,
    })
    return
  }
  if (computer_tech_description) {
    const data = await service.list(computer_tech_description)
    res.json({
      data: computer_tech_description,
    })
    return
  }
  if (computer_tech_costs_per_upgrade) {
    const data = await service.list(computer_tech_costs_per_upgrade)
    res.json({
      data: computer_tech_costs_per_upgrade,
    })
    return
  }
  if (espionage_tech_description) {
    const data = await service.list(espionage_tech_description)
    res.json({
      data: espionage_tech_description,
    })
    return
  }
  if (espionage_tech_costs_per_upgrade) {
    const data = await service.list(espionage_tech_costs_per_upgrade)
    res.json({
      data: espionage_tech_costs_per_upgrade,
    })
    return
  }
  if (gravitation_tech_description) {
    const data = await service.list(gravitation_tech_description)
    res.json({
      data: gravitation_tech_description,
    })
    return
  }
  if (gravitation_tech_costs_per_upgrade) {
    const data = await service.list(gravitation_tech_costs_per_upgrade)
    res.json({
      data: gravitation_tech_costs_per_upgrade,
    })
    return
  }
  if (intergalactic_research_network_description) {
    const data = await service.list(intergalactic_research_network_description)
    res.json({
      data: intergalactic_research_network_description,
    })
    return
  }
  if (intergalactic_research_network_costs_per_upgrade) {
    const data = await service.list(
      intergalactic_research_network_costs_per_upgrade
    )
    res.json({
      data: intergalactic_research_network_costs_per_upgrade,
    })
    return
  }
  if (energy_tech_description) {
    const data = await service.list(energy_tech_description)
    res.json({
      data: energy_tech_description,
    })
    return
  }
  if (energy_tech_costs_per_upgrade) {
    const data = await service.list(energy_tech_costs_per_upgrade)
    res.json({
      data: energy_tech_costs_per_upgrade,
    })
    return
  }
  if (hyperspace_tech_description) {
    const data = await service.list(hyperspace_tech_description)
    res.json({
      data: hyperspace_tech_description,
    })
    return
  }
  if (hyperspace_tech_costs_per_upgrade) {
    const data = await service.list(hyperspace_tech_costs_per_upgrade)
    res.json({
      data: hyperspace_tech_costs_per_upgrade,
    })
    return
  }
  if (ion_tech_description) {
    const data = await service.list(ion_tech_description)
    res.json({
      data: ion_tech_description,
    })
    return
  }
  if (ion_tech_costs_per_upgrade) {
    const data = await service.list(ion_tech_costs_per_upgrade)
    res.json({
      data: ion_tech_costs_per_upgrade,
    })
    return
  }
  if (laser_tech_description) {
    const data = await service.list(laser_tech_description)
    res.json({
      data: laser_tech_description,
    })
    return
  }
  if (laser_tech_costs_per_upgrade) {
    const data = await service.list(laser_tech_costs_per_upgrade)
    res.json({
      data: laser_tech_costs_per_upgrade,
    })
    return
  }
  if (plasma_tech_description) {
    const data = await service.list(plasma_tech_description)
    res.json({
      data: plasma_tech_description,
    })
    return
  }
  if (plasma_tech_costs_per_upgrade) {
    const data = await service.list(plasma_tech_costs_per_upgrade)
    res.json({
      data: plasma_tech_costs_per_upgrade,
    })
    return
  }
  if (armour_tech_description) {
    const data = await service.list(armour_tech_description)
    res.json({
      data: armour_tech_description,
    })
    return
  }

  return res.json({
    data: research_id,
    astrophysics_description,
    astrophysics_costs_per_upgrade,
    computer_tech_description,
    computer_tech_costs_per_upgrade,
    espionage_tech_description,
    espionage_tech_costs_per_upgrade,
    gravitation_tech_description,
    gravitation_tech_costs_per_upgrade,
    intergalactic_research_network_description,
    intergalactic_research_network_costs_per_upgrade,
    energy_tech_description,
    energy_tech_costs_per_upgrade,
    hyperspace_tech_description,
    hyperspace_tech_costs_per_upgrade,
    ion_tech_description,
    ion_tech_costs_per_upgrade,
    laser_tech_description,
    laser_tech_costs_per_upgrade,
    plasma_tech_description,
    plasma_tech_costs_per_upgrade,
    armour_tech_description,
    armour_tech_costs_per_upgrade,
    shielding_tech_description,
    shielding_tech_costs_per_upgrade,
    weapons_tech_description,
    weapons_tech_costs_per_upgrade,
    combustion_drive_description,
    combustion_drive_costs_per_upgrade,
    hyperspace_drive_description,
    hyperspace_drive_costs_per_upgrade,
    impulse_drive_description,
    impulse_drive_costs_per_upgrade,
  })
}

function researchExists(req, res, next) {
  const researchId = req.params.research_id
  const foundresearch = research.find(
    (researchs) => researchs.id === research_id
  )
  if (foundresearch) {
    res.locals.researchs = foundresearch
    return next()
  }
  next({
    status: 404,
    message: `research ID ${researchId} Doesn't Exist`,
  })
}

function checkResearchId(req, res, next) {
  const researchId = req.params.research_id
  const id = req.body.data.id
  if (researchId !== id && id !== undefined && (id !== '') & (id !== null)) {
    return next({
      status: 400,
      message: `research ID does not match route id. research: ${id}, Route: ${researchId}`,
    })
  }
  return next()
}

const update = async (req, res, next) => {
  const {
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
  } = req.params
  const data = await service.update(
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
    req.body.data
  )
  res.status(200).json({
    data: data[0],
  })
}

const create = async (req, res, next) => {
  const newResearch = res.locals.validresearch
  const newRes = await service.create(newResearch)
  res.status(201).json({ data: newRes[0] })
}

const show = async (req, res, next) => {
  const data = await service.show()
  return res.json({ data })
}

const read = async (req, res, next) => {
  const researchs = res.locals.research_id
  res.status(200).json({ data: research_id[0] })
}

const isValid = (req, res, next) => {
  if (!req.body.data)
    return next({ status: 400, message: 'No research available' })
  const {
    research_id,
    astrophysics_description,
    astrophysics_costs_per_upgrade,
    computer_tech_description,
    computer_tech_costs_per_upgrade,
    espionage_tech_description,
    espionage_tech_costs_per_upgrade,
    gravitation_tech_description,
    gravitation_tech_costs_per_upgrade,
    intergalactic_research_network_description,
    intergalactic_research_network_costs_per_upgrade,
    energy_tech_description,
    energy_tech_costs_per_upgrade,
    hyperspace_tech_description,
    hyperspace_tech_costs_per_upgrade,
    ion_tech_description,
    ion_tech_costs_per_upgrade,
    laser_tech_description,
    laser_tech_costs_per_upgrade,
    plasma_tech_description,
    plasma_tech_costs_per_upgrade,
    armour_tech_description,
    armour_tech_costs_per_upgrade,
    shielding_tech_description,
    shielding_tech_costs_per_upgrade,
    weapons_tech_description,
    weapons_tech_costs_per_upgrade,
    combustion_drive_description,
    combustion_drive_costs_per_upgrade,
    hyperspace_drive_description,
    hyperspace_drive_costs_per_upgrade,
    impulse_drive_description,
    impulse_drive_costs_per_upgrade,
  } = req.body.data
  const requiredFields = [
    'research_id',
    'astrophysics_description',
    'astrophysics_costs_per_upgrade',
    'computer_tech_description',
    'computer_tech_costs_per_upgrade',
    'espionage_tech_description',
    'espionage_tech_costs_per_upgrade',
    'gravitation_tech_description',
    'gravitation_tech_costs_per_upgrade',
    'intergalactic_research_network_description',
    'intergalactic_research_network_costs_per_upgrade',
    'energy_tech_description',
    'energy_tech_costs_per_upgrade',
    'hyperspace_tech_description',
    'hyperspace_tech_costs_per_upgrade',
    'ion_tech_description',
    'ion_tech_costs_per_upgrade',
    'laser_tech_description',
    'laser_tech_costs_per_upgrade',
    'plasma_tech_description',
    'plasma_tech_costs_per_upgrade',
    'armour_tech_description',
    'armour_tech_costs_per_upgrade',
    'shielding_tech_description',
    'shielding_tech_costs_per_upgrade',
    'weapons_tech_description',
    'weapons_tech_costs_per_upgrade',
    'combustion_drive_description',
    'combustion_drive_costs_per_upgrade',
    'hyperspace_drive_description',
    'hyperspace_drive_costs_per_upgrade',
    'impulse_drive_description',
    'impulse_drive_costs_per_upgrade',
  ]
  for (const field of requiredFields) {
    if (!req.body.data[field]) {
      return next({ status: 400, message: `Invalid input for ${field}` })
    }
  }
  res.locals.validResearch = req.body.data
  next()
}

const destroy = async (req, res) => {
  const {
    research_id,
    astrophysics_description,
    astrophysics_costs_per_upgrade,
    computer_tech_description,
    computer_tech_costs_per_upgrade,
    espionage_tech_description,
    espionage_tech_costs_per_upgrade,
    gravitation_tech_description,
    gravitation_tech_costs_per_upgrade,
    intergalactic_research_network_description,
    intergalactic_research_network_costs_per_upgrade,
    energy_tech_description,
    energy_tech_costs_per_upgrade,
    hyperspace_tech_description,
    hyperspace_tech_costs_per_upgrade,
    ion_tech_description,
    ion_tech_costs_per_upgrade,
    laser_tech_description,
    laser_tech_costs_per_upgrade,
    plasma_tech_description,
    plasma_tech_costs_per_upgrade,
    armour_tech_description,
    armour_tech_costs_per_upgrade,
    shielding_tech_description,
    shielding_tech_costs_per_upgrade,
    weapons_tech_description,
    weapons_tech_costs_per_upgrade,
    combustion_drive_description,
    combustion_drive_costs_per_upgrade,
    hyperspace_drive_description,
    hyperspace_drive_costs_per_upgrade,
    impulse_drive_description,
    impulse_drive_costs_per_upgrade,
  } = rq.params
  const des = await service.destroy(
    research_id,
    astrophysics_description,
    astrophysics_costs_per_upgrade,
    computer_tech_description,
    computer_tech_costs_per_upgrade,
    espionage_tech_description,
    espionage_tech_costs_per_upgrade,
    gravitation_tech_description,
    gravitation_tech_costs_per_upgrade,
    intergalactic_research_network_description,
    intergalactic_research_network_costs_per_upgrade,
    energy_tech_description,
    energy_tech_costs_per_upgrade,
    hyperspace_tech_description,
    hyperspace_tech_costs_per_upgrade,
    ion_tech_description,
    ion_tech_costs_per_upgrade,
    laser_tech_description,
    laser_tech_costs_per_upgrade,
    plasma_tech_description,
    plasma_tech_costs_per_upgrade,
    armour_tech_description,
    armour_tech_costs_per_upgrade,
    shielding_tech_description,
    shielding_tech_costs_per_upgrade,
    weapons_tech_description,
    weapons_tech_costs_per_upgrade,
    combustion_drive_description,
    combustion_drive_costs_per_upgrade,
    hyperspace_drive_description,
    hyperspace_drive_costs_per_upgrade,
    impulse_drive_description,
    impulse_drive_costs_per_upgrade
  )
  res.status(200)
}

module.exports = {
  list: [wrapper(list)],
  show: [wrapper(show)],
  read: [wrapper(checkResearchId), wrapper(researchExists), wrapper(read)],
  create: [wrapper(isValid), wrapper(create)],
  update: [wrapper(isValid), wrapper(researchExists), wrapper(update)],
  destroy: [wrapper(destroy)],
}
