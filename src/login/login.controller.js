const service = require('./login.service')
const wrapper = require('../errors/asyncErrorBoundary')

const list = async (req, res, next) => {
  const { user_id, is_logged_in } = req.query
  const data = await service.list(req.query)
  if (is_logged_in) {
    const data = await service.list(is_logged_in)
    res.json({
      data: is_logged_in,
    })
    return
  }
  return res.json({
    data: user_id,
    is_logged_in,
  })
}

function userExists(req, res, next) {
  const userId = req.params.user_id
  const foundUser = user.find((users) => users.id === user_id)
  if (foundUser) {
    res.locals.users = foundUser
    return next()
  }
  next({
    status: 404,
    message: `user ID ${userId} Doesn't Exist`,
  })
}

function checkUserId(req, res, next) {
  const userId = req.params.user_id
  const id = req.body.data.id
  if (userId !== id && id !== undefined && (id !== '') & (id !== null)) {
    return next({
      status: 400,
      message: `user ID does not match route id. user: ${id}, Route: ${userId}`,
    })
  }
  return next()
}

const update = async (req, res, next) => {
  const { user_id } = req.params
  const data = await service.update(user_id, req.body.data)
  res.status(200).json({
    data: data[0],
  })
}

const create = async (req, res, next) => {
  const newUser = res.locals.validuser
  const newRes = await service.create(newUser)
  res.status(201).json({ data: newRes[0] })
}

const show = async (req, res, next) => {
  const data = await service.show()
  return res.json({ data })
}

const read = async (req, res, next) => {
  const users = res.locals.user_id
  res.status(200).json({ data: user_id[0] })
}

const isValid = (req, res, next) => {
  if (!req.body.data) return next({ status: 400, message: 'No user available' })
  const { user_id, is_logged_in } = req.body.data
  const requiredFields = ['user_id', 'is_logged_in']
  for (const field of requiredFields) {
    if (!req.body.data[field]) {
      return next({ status: 400, message: `Invalid input for ${field}` })
    }
  }
  res.locals.validUser = req.body.data
  next()
}

const destroy = async (req, res) => {
  const { user_id } = rq.params
  const des = await service.destroy(user_id)
  res.status(200)
}

module.exports = {
  list: [wrapper(list)],
  show: [wrapper(show)],
  read: [wrapper(checkUserId), wrapper(userExists), wrapper(read)],
  create: [wrapper(isValid), wrapper(create)],
  update: [wrapper(isValid), wrapper(userExists), wrapper(update)],
  destroy: [wrapper(destroy)],
}
