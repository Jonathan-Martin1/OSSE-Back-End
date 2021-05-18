const service = require('./mines.service')
const wrapper = require('../errors/asyncErrorBoundary')

const list = async (req, res, next) => {
  const {
    buildings_id,
    metal_mine_costs_per_upgrade,
    crystal_mine_costs_per_upgrade,
    deuterium_costs_per_upgrade,
    solar_plant_costs_per_upgrade,
    metal_storage_costs_per_upgrade,
    crystal_storage_costs_per_upgrade,
    deutierum_storage_costs_per_upgrade,
  } = req.query
  const data = await service.list(req.query)
  if (buildings_id) {
    const data = await service.list(buildings_id)
    res.json({
      data: buildings_id,
    })
    return
  }
  if (metal_mine_costs_per_upgrade) {
    const data = await service.list(metal_mine_costs_per_upgrade)
    res.json({
      data: metal_mine_costs_per_upgrade,
    })
    return
  }
  if (crystal_mine_costs_per_upgrade) {
    const data = await service.list(crystal_mine_costs_per_upgrade)
    res.json({
      data: crystal_mine_costs_per_upgrade,
    })
    return
  }
  if (deuterium_costs_per_upgrade) {
    const data = await service.list(deuterium_costs_per_upgrade)
    res.json({
      data: deuterium_costs_per_upgrade,
    })
    return
  }
  if (solar_plant_costs_per_upgrade) {
    const data = await service.list(solar_plant_costs_per_upgrade)
    res.json({
      data: solar_plant_costs_per_upgrade,
    })
    return
  }
  if (metal_storage_costs_per_upgrade) {
    const data = await service.list(metal_storage_costs_per_upgrade)
    res.json({
      data: metal_storage_costs_per_upgrade,
    })
    return
  }
  if (crystal_storage_costs_per_upgrade) {
    const data = await service.list(crystal_storage_costs_per_upgrade)
    res.json({
      data: crystal_storage_costs_per_upgrade,
    })
    return
  }
  if (deuterium_storage_costs_per_upgrade) {
    const data = await service.list(deuterium_storage_costs_per_upgrade)
    res.json({
      data: deuterium_storage_costs_per_upgrade,
    })
    return
  }
  return res.json({
    data: buildings_id,
    metal_mine_costs_per_upgrade,
    crystal_mine_costs_per_upgrade,
    deuterium_costs_per_upgrade,
    solar_plant_costs_per_upgrade,
    metal_storage_costs_per_upgrade,
    crystal_storage_costs_per_upgrade,
    deutierum_storage_costs_per_upgrade,
  })
}

function buildingsExists(req, res, next) {
  const buildingsId = req.params.buildings_id
  const foundBuildings = buildings.find(
    (buildings) => buildings.id === buildings_id
  )
  if (foundBuildings) {
    res.locals.buildingss = foundBuildings
    return next()
  }
  next({
    status: 404,
    message: `buildings ID ${buildingsId} Doesn't Exist`,
  })
}

function checkBuildingsId(req, res, next) {
  const buildingsId = req.params.buildings_id
  const id = req.body.data.id
  if (buildingsId !== id && id !== undefined && (id !== '') & (id !== null)) {
    return next({
      status: 400,
      message: `buildings ID does not match route id. buildings: ${id}, Route: ${buildingsId}`,
    })
  }
  return next()
}

const update = async (req, res, next) => {
  const {
    metal_mine_costs_per_upgrade,
    crystal_mine_costs_per_upgrade,
    deuterium_costs_per_upgrade,
    solar_plant_costs_per_upgrade,
    metal_storage_costs_per_upgrade,
    crystal_storage_costs_per_upgrade,
    deutierum_storage_costs_per_upgrade,
  } = req.params
  const data = await service.update(
    metal_mine_costs_per_upgrade,
    crystal_mine_costs_per_upgrade,
    deuterium_costs_per_upgrade,
    solar_plant_costs_per_upgrade,
    metal_storage_costs_per_upgrade,
    crystal_storage_costs_per_upgrade,
    deutierum_storage_costs_per_upgrade,
    req.body.data
  )
  res.status(200).json({
    data: data[0],
  })
}

const create = async (req, res, next) => {
  const newBuildings = res.locals.validBuildings
  const newRes = await service.create(newBuildings)
  res.status(201).json({ data: newRes[0] })
}

const show = async (req, res, next) => {
  const data = await service.show()
  return res.json({ data })
}

const read = async (req, res, next) => {
  const buildingss = res.locals.buildings_id
  res.status(200).json({ data: buildings_id[0] })
}

const isValid = (req, res, next) => {
  if (!req.body.data)
    return next({ status: 400, message: 'No buildings available' })
  const {
    buildings_id,
    metal_mine_costs_per_upgrade,
    crystal_mine_costs_per_upgrade,
    deuterium_costs_per_upgrade,
    solar_plant_costs_per_upgrade,
    metal_storage_costs_per_upgrade,
    crystal_storage_costs_per_upgrade,
    deutierum_storage_costs_per_upgrade,
  } = req.body.data
  const requiredFields = [
    'buildings_id',
    'metal_mine_costs_per_upgrade',
    'crystal_mine_costs_per_upgrade',
    'deuterium_costs_per_upgrade',
    'solar_plant_costs_per_upgrade',
    'metal_storage_costs_per_upgrade',
    'crystal_storage_costs_per_upgrade',
    'deutierum_storage_costs_per_upgrade',
  ]
  for (const field of requiredFields) {
    if (!req.body.data[field]) {
      return next({ status: 400, message: `Invalid input for ${field}` })
    }
  }
  res.locals.validbuildings = req.body.data
  next()
}

const destroy = async (req, res) => {
  const {
    buildings_id,
    metal_mine_costs_per_upgrade,
    crystal_mine_costs_per_upgrade,
    deuterium_costs_per_upgrade,
    solar_plant_costs_per_upgrade,
    metal_storage_costs_per_upgrade,
    crystal_storage_costs_per_upgrade,
    deutierum_storage_costs_per_upgrade,
  } = rq.params
  const des = await service.destroy(
    buildings_id,
    metal_mine_costs_per_upgrade,
    crystal_mine_costs_per_upgrade,
    deuterium_costs_per_upgrade,
    solar_plant_costs_per_upgrade,
    metal_storage_costs_per_upgrade,
    crystal_storage_costs_per_upgrade,
    deutierum_storage_costs_per_upgrade
  )
  res.status(200)
}

module.exports = {
  list: [wrapper(list)],
  show: [wrapper(show)],
  read: [wrapper(checkBuildingsId), wrapper(buildingsExists), wrapper(read)],
  create: [wrapper(isValid), wrapper(create)],
  update: [wrapper(isValid), wrapper(buildingsExists), wrapper(update)],
  destroy: [wrapper(destroy)],
}
