const service = require('./defenses.service')
const wrapper = require('../errors/asyncErrorBoundary')

const list = async (req, res, next) => {
  const { defenses_id, defense, amount_of_defenses } = req.query
  const data = await service.list(req.query)
  if (amount_of_defenses) {
    const data = await service.list(amount_of_defenses)
    res.json({
      data: amount_of_defenses,
    })
    return
  }
  if (defense) {
    const data = await service.list(defense)
    res.json({ data: defense })
    return
  }
  if (defenses_id) {
    const data = await service.list(defenses_id)
    res.json({ data: defenses_id })
    return
  }
  return res.json({ data: defenses_id, defense, amount_of_defenses })
}

function defensesExists(req, res, next) {
  const defensesId = req.params.defenses_id
  const foundDefenses = defenses.find(
    (defensess) => defensess.id === defenses_id
  )
  if (foundDefenses) {
    res.locals.dish = foundDefenses
    return next()
  }
  next({
    status: 404,
    message: `defenses ID ${defensesId} Doesn't Exist`,
  })
}

function checkDefensesId(req, res, next) {
  const defensesId = req.params.defenses_id
  const id = req.body.data.id
  if (defensesId !== id && id !== undefined && (id !== '') & (id !== null)) {
    return next({
      status: 400,
      message: `defenses ID does not match route id. defenses: ${id}, Route: ${defensesId}`,
    })
  }
  return next()
}

const update = async (req, res, next) => {
  const { defense, amount_of_defenses } = req.params
  const data = await service.update(defense, amount_of_defenses, req.body.data)
  res.status(200).json({
    data: data[0],
  })
}

const create = async (req, res, next) => {
  const newDefenses = res.locals.validDefenses
  const newRes = await service.create(newDefenses)
  res.status(201).json({ data: newRes[0] })
}

const show = async (req, res, next) => {
  const data = await service.show()
  return res.json({ data })
}

const read = async (req, res, next) => {
  const defensess = res.locals.defenses
  res.status(200).json({ data: defenses[0] })
}

const isValid = (req, res, next) => {
  if (!req.body.data)
    return next({ status: 400, message: 'No defenses selected' })
  const { defenses, amount_of_defenses } = req.body.data
  const requiredFields = ['defenses', 'amount_of_defenses']
  for (const field of requiredFields) {
    if (!req.body.data[field]) {
      return next({ status: 400, message: `Invalid input for ${field}` })
    }
  }
  res.locals.validDefenses = req.body.data
  next()
}

const destroy = async (req, res) => {
  const { defenses_id, defense, amount_of_defenses } = rq.params
  const des = await service.destroy(defenses_id, defense, amount_of_defenses)
  res.status(200)
}

module.exports = {
  list: [wrapper(list)],
  show: [wrapper(show)],
  read: [wrapper(checkDefensesId), wrapper(defensesExists), wrapper(read)],
  create: [wrapper(isValid), wrapper(create)],
  update: [wrapper(isValid), wrapper(defensesExists), wrapper(update)],
  destroy: [wrapper(destroy)],
}
