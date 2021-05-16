const service = require('./resources.service')
const wrapper = require('../errors/asyncErrorBoundary')

const list = async (req, res, next) => {
  const { resources_id, base_resources, planet_list_with_resources } = req.query
  const data = await service.list(req.query)
  if (planet_list_with_resources) {
    const data = await service.list(planet_list_with_resources)
    res.json({
      data: planet_list_with_resources,
    })
    return
  }
  if (base_resources) {
    const data = await service.list(base_resources)
    res.json({ data: base_resources })
    return
  }
  return res.json({
    data: resources_id,
    base_resources,
    planet_list_with_resources,
  })
}

function resourcesExists(req, res, next) {
  const resourcesId = req.params.resources_id
  const foundResources = resources.find(
    (resourcess) => resourcess.id === resources_id
  )
  if (foundResources) {
    res.locals.dish = foundResources
    return next()
  }
  next({
    status: 404,
    message: `resources ID ${resourcesId} Doesn't Exist`,
  })
}

function checkResourcesId(req, res, next) {
  const resourcesId = req.params.resources_id
  const id = req.body.data.id
  if (resourcesId !== id && id !== undefined && (id !== '') & (id !== null)) {
    return next({
      status: 400,
      message: `resources ID does not match route id. resources: ${id}, Route: ${resourcesId}`,
    })
  }
  return next()
}

const update = async (req, res, next) => {
  const { base_resources, planet_list_with_resources } = req.params
  const data = await service.update(
    base_resources,
    planet_list_with_resources,
    req.body.data
  )
  res.status(200).json({
    data: data[0],
  })
}

const create = async (req, res, next) => {
  const newResources = res.locals.validResources
  const newRes = await service.create(newResources)
  res.status(201).json({ data: newRes[0] })
}

const show = async (req, res, next) => {
  const data = await service.show()
  return res.json({ data })
}

const read = async (req, res, next) => {
  const resourcess = res.locals.resources
  res.status(200).json({ data: resources[0] })
}

const isValid = (req, res, next) => {
  if (!req.body.data)
    return next({ status: 400, message: 'No resources selected' })
  const { base_resources, planet_list_with_resources } = req.body.data
  const requiredFields = ['base_resources', 'planet_list_with_resources']
  for (const field of requiredFields) {
    if (!req.body.data[field]) {
      return next({ status: 400, message: `Invalid input for ${field}` })
    }
  }
  res.locals.validResources = req.body.data
  next()
}

const destroy = async (req, res) => {
  const { resources_id, base_resources, planet_list_with_resources } = rq.params
  const des = await service.destroy(
    resources_id,
    base_resources,
    planet_list_with_resources
  )
  res.status(200)
}

module.exports = {
  list: [wrapper(list)],
  show: [wrapper(show)],
  read: [wrapper(checkResourcesId), wrapper(resourcesExists), wrapper(read)],
  create: [wrapper(isValid), wrapper(create)],
  update: [wrapper(isValid), wrapper(resourcesExists), wrapper(update)],
  destroy: [wrapper(destroy)],
}
