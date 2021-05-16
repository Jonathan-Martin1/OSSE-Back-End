const service = require('./alliance.service')
const wrapper = require('../errors/asyncErrorBoundary')

const list = async (req, res, next) => {
  const { alliance_id, alliance_name, description } = req.query
  const data = await service.list(req.query)
  if (description) {
    const data = await service.list(description)
    res.json({
      data: description,
    })
    return
  }
  if (alliance_name) {
    const data = await service.list(alliance_name)
    res.json({ data: alliance_name })
    return
  }
  return res.json({ data: alliance_id, alliance_name, description })
}

function allianceExists(req, res, next) {
  const allianceId = req.params.alliance_id
  const foundAlliance = alliance.find(
    (alliances) => alliances.id === alliance_id
  )
  if (foundAlliance) {
    res.locals.dish = foundAlliance
    return next()
  }
  next({
    status: 404,
    message: `Alliance ID ${allianceId} Doesn't Exist`,
  })
}

function checkAllianceId(req, res, next) {
  const allianceId = req.params.alliance_id
  const id = req.body.data.id
  if (allianceId !== id && id !== undefined && (id !== '') & (id !== null)) {
    return next({
      status: 400,
      message: `Alliance ID does not match route id. Alliance: ${id}, Route: ${allianceId}`,
    })
  }
  return next()
}

const update = async (req, res, next) => {
  const { alliance_id } = req.params
  const data = await service.update(alliance_id, req.body.data)
  res.status(200).json({
    data: data[0],
  })
}

const create = async (req, res, next) => {
  const newAlliance = res.locals.validAlliance
  const newRes = await service.create(newAlliance)
  res.status(201).json({ data: newRes[0] })
}

const show = async (req, res, next) => {
  const data = await service.show()
  return res.json({ data })
}

const read = async (req, res, next) => {
  const alliances = res.locals.alliance
  res.status(200).json({ data: alliance[0] })
}

const isValid = (req, res, next) => {
  if (!req.body.data)
    return next({ status: 400, message: 'No alliance selected' })
  const { alliance_name, description } = req.body.data
  const requiredFields = ['alliance_name', 'description']
  for (const field of requiredFields) {
    if (!req.body.data[field]) {
      return next({ status: 400, message: `Invalid input for ${field}` })
    }
  }
  res.locals.validAlliance = req.body.data
  next()
}

const destroy = async (req, res) => {
  const { alliance_id } = rq.params
  const des = await service.destroy(alliance_id)
  res.status(200)
}

module.exports = {
  list: [wrapper(list)],
  show: [wrapper(show)],
  read: [wrapper(checkAllianceId), wrapper(allianceExists), wrapper(read)],
  create: [wrapper(isValid), wrapper(create)],
  update: [wrapper(isValid), wrapper(allianceExists), wrapper(update)],
  destroy: [wrapper(destroy)],
}
