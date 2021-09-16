const playerStats = require('../seed-data/playerStats-data')

exports.seed = function (knex) {
  return knex
    .raw('TRUNCATE TABLE player_stats RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('player_stats').insert(playerStats)
    })
}
