const resources = require('../seed-data/resource-data')

exports.seed = function (knex) {
  return knex
    .raw('TRUNCATE TABLE player_resources RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('player_resources').insert(resources)
    })
}
