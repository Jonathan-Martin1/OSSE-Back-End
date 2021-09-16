const buildings = require('../seed-data/buildings-data')

exports.seed = function (knex) {
  return knex
    .raw('TRUNCATE TABLE buildings RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('buildings').insert(buildings)
    })
}
