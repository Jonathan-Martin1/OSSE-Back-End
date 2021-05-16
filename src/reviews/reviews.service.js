const knex = require('../db/connection')

const listReviewsById = (knex, reviewId) =>
  knex('reviews as a').where({ 'a.reviews_id': reviewId })

const list = () => {
  return knex('reviews').select('*').orderBy('review_id')
}

const show = () => {
  return knex('reviews').select('*')
}

const read = (review_id, user_name, message, rating) => {
  return knex('reviews')
    .select('*')
    .where(
      { review_id: review_id },
      { user_name: user_name },
      { message: message },
      { rating: rating }
    )
}

const create = (review_id, user_name, message, rating) => {
  return knex('reviews').insert(review_id, user_name, message, rating, '*')
}

const update = (reviews_id, updatedReviews) => {
  return knex('reviews')
    .where(
      { review_id: reviews_id },
      { user_name: user_name },
      { message: message },
      { rating: rating }
    )
    .update(updatedReviews)
    .returning('*')
}

const destroy = (review_id, user_name, message, rating) => {
  return knex('reviews')
    .delete(review_id, user_name, message, rating)
    .returning('*')
}

module.exports = {
  list,
  show,
  read,
  create,
  listReviewsById,
  update,
  destroy,
}
