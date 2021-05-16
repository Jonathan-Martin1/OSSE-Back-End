const service = require('./reviews.service')
const wrapper = require('../errors/asyncErrorBoundary')

const list = async (req, res, next) => {
  const { review_id, user_name, message, rating } = req.query
  const data = await service.list(req.query)
  if (message) {
    const data = await service.list(message)
    res.json({
      data: message,
    })
    return
  }
  if (user_name) {
    const data = await service.list(user_name)
    res.json({ data: user_name })
    return
  }
  if (review_id) {
    const data = await service.list(review_id)
    res.json({ data: review_id })
    return
  }
  if (rating) {
    const data = await service.list(rating)
    res.json({ data: rating })
    return
  }
  return res.json({ data: review_id, user_name, message, rating })
}

function reviewExists(req, res, next) {
  const reviewId = req.params.review_id
  const foundReview = review.find((reviews) => reviews.id === review_id)
  if (foundReview) {
    res.locals.dish = foundReview
    return next()
  }
  next({
    status: 404,
    message: `review ID ${reviewId} Doesn't Exist`,
  })
}

function checkReviewId(req, res, next) {
  const reviewId = req.params.review_id
  const id = req.body.data.id
  if (reviewId !== id && id !== undefined && (id !== '') & (id !== null)) {
    return next({
      status: 400,
      message: `review ID does not match route id. review: ${id}, Route: ${reviewId}`,
    })
  }
  return next()
}

const update = async (req, res, next) => {
  const { user_name, message, rating } = req.params
  const data = await service.update(user_name, message, rating, req.body.data)
  res.status(200).json({
    data: data[0],
  })
}

const create = async (req, res, next) => {
  const newReview = res.locals.validReview
  const newRes = await service.create(newReview)
  res.status(201).json({ data: newRes[0] })
}

const show = async (req, res, next) => {
  const data = await service.show()
  return res.json({ data })
}

const read = async (req, res, next) => {
  const review = res.locals.reviews
  res.status(200).json({ data: reviews[0] })
}

const isValid = (req, res, next) => {
  if (!req.body.data)
    return next({ status: 400, message: 'No review selected' })
  const { review_id, user_name, message, rating } = req.body.data
  const requiredFields = ['review_id', 'user_name', 'message', 'rating']
  for (const field of requiredFields) {
    if (!req.body.data[field]) {
      return next({ status: 400, message: `Invalid input for ${field}` })
    }
  }
  res.locals.validReview = req.body.data
  next()
}

const destroy = async (req, res) => {
  const { review_id, user_name, message, rating } = rq.params
  const des = await service.destroy(review_id, user_name, message, rating)
  res.status(200)
}

module.exports = {
  list: [wrapper(list)],
  show: [wrapper(show)],
  read: [wrapper(checkReviewId), wrapper(reviewExists), wrapper(read)],
  create: [wrapper(isValid), wrapper(create)],
  update: [wrapper(isValid), wrapper(reviewExists), wrapper(update)],
  destroy: [wrapper(destroy)],
}
