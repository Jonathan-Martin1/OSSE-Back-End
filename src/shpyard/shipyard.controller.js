const service = require('./shipyard.service')
const wrapper = require('../errors/asyncErrorBoundary')

const list = async (req, res, next) => {
  const { ships_id, ship_s, amount_of_ships, total_storage_compacity } =
    req.query
  const data = await service.list(req.query)
  if (ship_s) {
    const data = await service.list(ship_s)
    res.json({
      data: ship_s,
    })
    return
  }
  if (amount_of_ships) {
    const data = await service.list(amount_of_ships)
    res.json({ data: amount_of_ships })
    return
  }
  if (ships_id) {
    const data = await service.list(ships_id)
    res.json({ data: ships_id })
    return
  }
  return res.json({
    data: ships_id,
    ship_s,
    amount_of_ships,
  })
}

function shipsExists(req, res, next) {
  const shipsId = req.params.ships_id
  const foundShips = ships.find((shipss) => shipss.id === ships_id)
  if (foundShips) {
    res.locals.dish = foundShips
    return next()
  }
  next({
    status: 404,
    message: `ships ID ${shipsId} Doesn't Exist`,
  })
}

function checkShipsId(req, res, next) {
  const shipsId = req.params.player_leet_id
  const id = req.body.data.id
  if (shipsId !== id && id !== undefined && (id !== '') & (id !== null)) {
    return next({
      status: 400,
      message: `ships ID does not match route id. ships: ${id}, Route: ${shipsId}`,
    })
  }
  return next()
}

const update = async (req, res, next) => {
  const { ship_s, amount_of_ships } = req.params
  const data = await service.update(ship_s, amount_of_ships, req.body.data)
  res.status(200).json({
    data: data[0],
  })
}

const create = async (req, res, next) => {
  const newShips = res.locals.validShips
  const newRes = await service.create(newShips)
  res.status(201).json({ data: newRes[0] })
}

const show = async (req, res, next) => {
  const data = await service.show()
  return res.json({ data })
}

const read = async (req, res, next) => {
  const shipss = res.locals.ships
  res.status(200).json({ data: ships[0] })
}

const isValid = (req, res, next) => {
  if (!req.body.data)
    return next({ status: 400, message: 'No ships available' })
  const { ship_s, amount_of_ships } = req.body.data
  const requiredFields = ['ship_s', 'amount_of_ships']
  for (const field of requiredFields) {
    if (!req.body.data[field]) {
      return next({ status: 400, message: `Invalid input for ${field}` })
    }
  }
  res.locals.validShips = req.body.data
  next()
}

const destroy = async (req, res) => {
  const { ships_id, ship_s, amount_of_ships } = rq.params
  const des = await service.destroy(ships_id, ship_s, amount_of_ships)
  res.status(200)
}

module.exports = {
  list: [wrapper(list)],
  show: [wrapper(show)],
  read: [wrapper(checkShipsId), wrapper(shipsExists), wrapper(read)],
  create: [wrapper(isValid), wrapper(create)],
  update: [wrapper(isValid), wrapper(shipsExists), wrapper(update)],
  destroy: [wrapper(destroy)],
}
