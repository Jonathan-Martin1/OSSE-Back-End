const review = require('../seed-data/review-data')

exports.seed = function (knex) {
  return knex
    .raw('TRUNCATE TABLE reviews RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('reviews').insert(review)
    })
}
