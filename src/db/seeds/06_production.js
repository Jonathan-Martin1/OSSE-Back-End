const production = require('../seed-data/production-data')

exports.seed = function (knex) {
  return knex
    .raw('TRUNCATE TABLE production RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('production').insert(production)
    })
}
