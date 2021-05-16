const service = require('./store.service')
const wrapper = require('../errors/asyncErrorBoundary')

const list = async (req, res, next) => {
  const {
    store_id,
    subscriptions,
    subscription_details,
    subscription_price,
    boosters,
    booster_details,
    booster_price,
  } = req.query
  const data = await service.list(req.query)
  if (subscriptions) {
    const data = await service.list(subscriptions)
    res.json({
      data: subscriptions,
    })
    return
  }
  if (subscription_details) {
    const data = await service.list(subscription_details)
    res.json({ data: subscription_details })
    return
  }
  if (subscription_price) {
    const data = await service.list(subscription_price)
    res.json({ data: subscription_price })
    return
  }
  if (boosters) {
    const data = await service.list(boosters)
    res.json({ data: boosters })
    return
  }
  if (booster_details) {
    const data = await service.list(booster_details)
    res.json({ data: booster_details })
    return
  }
  if (booster_price) {
    const data = await service.list(booster_price)
    res.json({ data: booster_price })
    return
  }
  return res.json({
    data: store_id,
    subscriptions,
    subscription_details,
    subscription_price,
    boosters,
    booster_details,
    booster_price,
  })
}

function storeExists(req, res, next) {
  const storeId = req.params.store_id
  const foundStore = store.find((stores) => stores.id === store_id)
  if (foundStore) {
    res.locals.dish = foundStore
    return next()
  }
  next({
    status: 404,
    message: `store ID ${storeId} Doesn't Exist`,
  })
}

function checkStoreId(req, res, next) {
  const storeId = req.params.store_id
  const id = req.body.data.id
  if (storeId !== id && id !== undefined && (id !== '') & (id !== null)) {
    return next({
      status: 400,
      message: `store ID does not match route id. store: ${id}, Route: ${storeId}`,
    })
  }
  return next()
}

const update = async (req, res, next) => {
  const {
    subscriptions,
    subscription_details,
    subscription_price,
    boosters,
    booster_details,
    booster_price,
  } = req.params
  const data = await service.update(
    subscriptions,
    subscription_details,
    subscription_price,
    boosters,
    booster_details,
    booster_price,
    req.body.data
  )
  res.status(200).json({
    data: data[0],
  })
}

const create = async (req, res, next) => {
  const newStore = res.locals.validStore
  const newRes = await service.create(newStore)
  res.status(201).json({ data: newRes[0] })
}

const show = async (req, res, next) => {
  const data = await service.show()
  return res.json({ data })
}

const read = async (req, res, next) => {
  const stores = res.locals.store
  res.status(200).json({ data: store[0] })
}

const isValid = (req, res, next) => {
  if (!req.body.data)
    return next({ status: 400, message: 'No store available' })
  const { subscriptions, subscription_details, subscription_price } =
    req.body.data
  const requiredFields = [
    'subscriptions',
    'subscription_details',
    'subscription_price',
  ]
  for (const field of requiredFields) {
    if (!req.body.data[field]) {
      return next({ status: 400, message: `Invalid input for ${field}` })
    }
  }
  res.locals.validStore = req.body.data
  next()
}

const destroy = async (req, res) => {
  const {
    store_id,
    subscriptions,
    subscription_details,
    subscription_price,
    boosters,
    booster_details,
    booster_price,
  } = rq.params
  const des = await service.destroy(
    store_id,
    subscriptions,
    subscription_details,
    subscription_price,
    boosters,
    booster_details,
    booster_price
  )
  res.status(200)
}

module.exports = {
  list: [wrapper(list)],
  show: [wrapper(show)],
  read: [wrapper(checkStoreId), wrapper(storeExists), wrapper(read)],
  create: [wrapper(isValid), wrapper(create)],
  update: [wrapper(isValid), wrapper(storeExists), wrapper(update)],
  destroy: [wrapper(destroy)],
}
