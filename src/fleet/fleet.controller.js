const service = require('./fleet.service')
const wrapper = require('../errors/asyncErrorBoundary')

const list = async (req, res, next) => {
  const {
    player_fleet_id,
    ship_name,
    amount_of_ships,
    total_storage_compacity,
  } = req.query
  const data = await service.list(req.query)
  if (ship_name) {
    const data = await service.list(ship_name)
    res.json({
      data: ship_name,
    })
    return
  }
  if (amount_of_ships) {
    const data = await service.list(amount_of_ships)
    res.json({ data: amount_of_ships })
    return
  }
  if (total_storage_compacity) {
    const data = await service.list(total_storage_compacity)
    res.json({ data: total_storage_compacity })
    return
  }
  return res.json({
    data: player_fleet_id,
    ship_name,
    amount_of_ships,
    total_storage_compacity,
  })
}

function fleetExists(req, res, next) {
  const fleetId = req.params.player_fleet_id
  const foundFleet = fleet.find((fleets) => fleets.id === fleet_id)
  if (foundFleet) {
    res.locals.dish = foundFleet
    return next()
  }
  next({
    status: 404,
    message: `Fleet ID ${fleetId} Doesn't Exist`,
  })
}

function checkFleetId(req, res, next) {
  const fleetId = req.params.player_leet_id
  const id = req.body.data.id
  if (fleetId !== id && id !== undefined && (id !== '') & (id !== null)) {
    return next({
      status: 400,
      message: `Fleet ID does not match route id. Fleet: ${id}, Route: ${fleetId}`,
    })
  }
  return next()
}

const update = async (req, res, next) => {
  const { player_fleet_id } = req.params
  const data = await service.update(player_fleet_id, req.body.data)
  res.status(200).json({
    data: data[0],
  })
}

const create = async (req, res, next) => {
  const newFleet = res.locals.validFleet
  const newRes = await service.create(newFleet)
  res.status(201).json({ data: newRes[0] })
}

const show = async (req, res, next) => {
  const data = await service.show()
  return res.json({ data })
}

const read = async (req, res, next) => {
  const fleets = res.locals.playerFleet
  res.status(200).json({ data: playerFleet[0] })
}

const isValid = (req, res, next) => {
  if (!req.body.data)
    return next({ status: 400, message: 'No fleet available' })
  const { ship_name, amount_of_ships, total_storage_compacity } = req.body.data
  const requiredFields = [
    'ship_name',
    'amount_of_ships',
    'total_storage_compacity',
  ]
  for (const field of requiredFields) {
    if (!req.body.data[field]) {
      return next({ status: 400, message: `Invalid input for ${field}` })
    }
  }
  res.locals.validFleet = req.body.data
  next()
}

const destroy = async (req, res) => {
  const { Fleet_id } = rq.params
  const des = await service.destroy(Fleet_id)
  res.status(200)
}

module.exports = {
  list: [wrapper(list)],
  show: [wrapper(show)],
  read: [wrapper(checkFleetId), wrapper(fleetExists), wrapper(read)],
  create: [wrapper(isValid), wrapper(create)],
  update: [wrapper(isValid), wrapper(fleetExists), wrapper(update)],
  destroy: [wrapper(destroy)],
}
