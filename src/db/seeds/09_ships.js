const ships = require('../seed-data/ships-data')

exports.seed = function (knex) {
  return knex
    .raw('TRUNCATE TABLE ships RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('ships').insert(ships)
    })
}
