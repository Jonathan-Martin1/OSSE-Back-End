const planetLists = require('../seed-data/planetList-data')

exports.seed = function (knex) {
  return knex
    .raw('TRUNCATE TABLE planet_list RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('planet_list').insert(planetLists)
    })
}
