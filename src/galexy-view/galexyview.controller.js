const service = require('./galexyview.service')
const wrapper = require('../errors/asyncErrorBoundary')

const list = async (req, res, next) => {
  const {
    galexy_view_id,
    galexy_view_coordinates,
    galexy_view_fields,
    has_moon,
  } = req.query
  const data = await service.list(req.query)
  if (galexy_view_coordinates) {
    const data = await service.list(galexy_view_coordinates)
    res.json({
      data: galexy_view_coordinates,
    })
    return
  }
  if (galexy_view_fields) {
    const data = await service.list(galexy_view_fields)
    res.json({ data: galexy_view_fields })
    return
  }
  if (has_moon) {
    const data = await service.list(has_moon)
    res.json({ data: has_moon })
    return
  }
  return res.json({
    data: galexy_view_id,
    galexy_view_coordinates,
    galexy_view_fields,
    has_moon,
  })
}

function galexyViewExists(req, res, next) {
  const galexyViewId = req.params.galexy_view_id
  const foundGalexyView = galexyView.find(
    (galexyViews) => galexyViews.id === galexy_view_id
  )
  if (foundGalexyView) {
    res.locals.dish = foundGalexyView
    return next()
  }
  next({
    status: 404,
    message: `galexyView ID ${galexyViewId} Doesn't Exist`,
  })
}

function checkGalexyViewId(req, res, next) {
  const galexyViewId = req.params.galexy_view_id
  const id = req.body.data.id
  if (galexyViewId !== id && id !== undefined && (id !== '') & (id !== null)) {
    return next({
      status: 400,
      message: `galexyView ID does not match route id. galexyView: ${id}, Route: ${galexyViewId}`,
    })
  }
  return next()
}

const update = async (req, res, next) => {
  const { galexy_view_coordinates, galexy_view_fields, has_moon } = req.params
  const data = await service.update(
    galexy_view_coordinates,
    galexy_view_fields,
    has_moon,
    req.body.data
  )
  res.status(200).json({
    data: data[0],
  })
}

const create = async (req, res, next) => {
  const newGalexyView = res.locals.validGalexyView
  const newRes = await service.create(newGalexyView)
  res.status(201).json({ data: newRes[0] })
}

const show = async (req, res, next) => {
  const data = await service.show()
  return res.json({ data })
}

const read = async (req, res, next) => {
  const galexyViews = res.locals.galexy_view
  res.status(200).json({ data: galexy_view[0] })
}

const isValid = (req, res, next) => {
  if (!req.body.data)
    return next({ status: 400, message: 'No galexyView available' })
  const { galexy_view_coordinates, galexy_view_fields, has_moon } =
    req.body.data
  const requiredFields = [
    'galexy_view_coordinates',
    'galexy_view_fields',
    'has_moon',
  ]
  for (const field of requiredFields) {
    if (!req.body.data[field]) {
      return next({ status: 400, message: `Invalid input for ${field}` })
    }
  }
  res.locals.validGalexyView = req.body.data
  next()
}

const destroy = async (req, res) => {
  const {
    galexy_view_id,
    galexy_view_coordinates,
    galexy_view_fields,
    has_moon,
  } = rq.params
  const des = await service.destroy(
    galexy_view_id,
    galexy_view_coordinates,
    galexy_view_fields,
    has_moon
  )
  res.status(200)
}

module.exports = {
  list: [wrapper(list)],
  show: [wrapper(show)],
  read: [wrapper(checkGalexyViewId), wrapper(galexyViewExists), wrapper(read)],
  create: [wrapper(isValid), wrapper(create)],
  update: [wrapper(isValid), wrapper(galexyViewExists), wrapper(update)],
  destroy: [wrapper(destroy)],
}
