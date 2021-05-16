const alliances = require('../seed-data/alliance-data')

exports.seed = function (knex) {
  return knex
    .raw('TRUNCATE TABLE alliance RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('alliance').insert(alliances)
    })
}
