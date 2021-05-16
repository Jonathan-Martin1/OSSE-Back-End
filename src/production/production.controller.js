const service = require('./production.service')
const wrapper = require('../errors/asyncErrorBoundary')

const list = async (req, res, next) => {
  const {
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
  } = req.query
  const data = await service.list(req.query)
  if (robotics_factory_description) {
    const data = await service.list(robotics_factory_description)
    res.json({
      data: robotics_factory_description,
    })
    return
  }
  if (robotics_factory_costs_per_upgrade) {
    const data = await service.list(robotics_factory_costs_per_upgrade)
    res.json({
      data: robotics_factory_costs_per_upgrade,
    })
    return
  }
  if (shipyard_description) {
    const data = await service.list(shipyard_description)
    res.json({
      data: shipyard_description,
    })
    return
  }
  if (shipyard_costs_per_upgrade) {
    const data = await service.list(shipyard_costs_per_upgrade)
    res.json({
      data: shipyard_costs_per_upgrade,
    })
    return
  }
  if (nanomachine_description) {
    const data = await service.list(nanomachine_description)
    res.json({
      data: nanomachine_description,
    })
    return
  }
  if (nanomachine_costs_per_upgrade) {
    const data = await service.list(nanomachine_costs_per_upgrade)
    res.json({
      data: nanomachine_costs_per_upgrade,
    })
    return
  }
  if (university_description) {
    const data = await service.list(university_description)
    res.json({
      data: university_description,
    })
    return
  }
  if (missile_silo_description) {
    const data = await service.list(missile_silo_description)
    res.json({
      data: missile_silo_description,
    })
    return
  }
  if (missile_silo_costs_per_upgrade) {
    const data = await service.list(missile_silo_costs_per_upgrade)
    res.json({
      data: missile_silo_costs_per_upgrade,
    })
    return
  }
  if (space_port_description) {
    const data = await service.list(space_port_description)
    res.json({
      data: space_port_description,
    })
    return
  }
  if (space_post_costs_per_upgrade) {
    const data = await service.list(space_post_costs_per_upgrade)
    res.json({
      data: space_post_costs_per_upgrade,
    })
    return
  }
  if (research_lab_description) {
    const data = await service.list(research_lab_description)
    res.json({
      data: research_lab_description,
    })
    return
  }
  if (research_lab_costs_per_upgrade) {
    const data = await service.list(research_lab_costs_per_upgrade)
    res.json({
      data: research_lab_costs_per_upgrade,
    })
    return
  }
  if (terraformer_description) {
    const data = await service.list(terraformer_description)
    res.json({
      data: terraformer_description,
    })
    return
  }
  if (terraformer_costs_per_upgrade) {
    const data = await service.list(terraformer_costs_per_upgrade)
    res.json({
      data: terraformer_costs_per_upgrade,
    })
    return
  }
  if (alliance_port_description) {
    const data = await service.list(alliance_port_description)
    res.json({
      data: alliance_port_description,
    })
    return
  }
  if (alliance_port_costs_per_upgrade) {
    const data = await service.list(alliance_port_costs_per_upgrade)
    res.json({
      data: alliance_port_costs_per_upgrade,
    })
    return
  }
  if (galexy_sensor_description) {
    const data = await service.list(galexy_sensor_description)
    res.json({
      data: galexy_sensor_description,
    })
    return
  }
  if (galexy_sensor_costs_per_upgrade) {
    const data = await service.list(galexy_sensor_costs_per_upgrade)
    res.json({
      data: galexy_sensor_costs_per_upgrade,
    })
    return
  }
  if (jump_gate_description) {
    const data = await service.list(jump_gate_description)
    res.json({
      data: jump_gate_description,
    })
    return
  }
  if (jump_gate_costs_per_upgrade) {
    const data = await service.list(jump_gate_costs_per_upgrade)
    res.json({
      data: jump_gate_costs_per_upgrade,
    })
    return
  }
  return res.json({
    data: production_id,
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
  })
}

function productionExists(req, res, next) {
  const productionId = req.params.production_id
  const foundProduction = production.find(
    (productions) => productions.id === production_id
  )
  if (foundProduction) {
    res.locals.productions = foundProduction
    return next()
  }
  next({
    status: 404,
    message: `production ID ${productionId} Doesn't Exist`,
  })
}

function checkProductionId(req, res, next) {
  const productionId = req.params.production_id
  const id = req.body.data.id
  if (productionId !== id && id !== undefined && (id !== '') & (id !== null)) {
    return next({
      status: 400,
      message: `production ID does not match route id. production: ${id}, Route: ${productionId}`,
    })
  }
  return next()
}

const update = async (req, res, next) => {
  const {
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
  } = req.params
  const data = await service.update(
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
    req.body.data
  )
  res.status(200).json({
    data: data[0],
  })
}

const create = async (req, res, next) => {
  const newProduction = res.locals.validProduction
  const newRes = await service.create(newProduction)
  res.status(201).json({ data: newRes[0] })
}

const show = async (req, res, next) => {
  const data = await service.show()
  return res.json({ data })
}

const read = async (req, res, next) => {
  const productions = res.locals.production_id
  res.status(200).json({ data: production_id[0] })
}

const isValid = (req, res, next) => {
  if (!req.body.data)
    return next({ status: 400, message: 'No production available' })
  const {
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
  } = req.body.data
  const requiredFields = [
    'production_id',
    'robotics_factory_description',
    'robotics_factory_costs_per_upgrade',
    'shipyard_description',
    'shipyard_costs_per_upgrade',
    'nanomachine_description',
    'nanomachine_costs_per_upgrade',
    'university_description',
    'university_costs_per_upgrade',
    'missile_silo_description',
    'missile_silo_costs_per_upgrade',
    'space_port_description',
    'space_post_costs_per_upgrade',
    'research_lab_description',
    'research_lab_costs_per_upgrade',
    'terraformer_description',
    'terraformer_costs_per_upgrade',
    'alliance_port_description',
    'alliance_port_costs_per_upgrade',
    'galexy_sensor_description',
    'galexy_sensor_costs_per_upgrade',
    'jump_gate_description',
    'jump_gate_costs_per_upgrade',
  ]
  for (const field of requiredFields) {
    if (!req.body.data[field]) {
      return next({ status: 400, message: `Invalid input for ${field}` })
    }
  }
  res.locals.validproduction = req.body.data
  next()
}

const destroy = async (req, res) => {
  const {
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
  } = rq.params
  const des = await service.destroy(
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
  )
  res.status(200)
}

module.exports = {
  list: [wrapper(list)],
  show: [wrapper(show)],
  read: [wrapper(checkProductionId), wrapper(productionExists), wrapper(read)],
  create: [wrapper(isValid), wrapper(create)],
  update: [wrapper(isValid), wrapper(productionExists), wrapper(update)],
  destroy: [wrapper(destroy)],
}
