const defenses = require('../seed-data/defenses-data')

exports.seed = function (knex) {
  return knex
    .raw('TRUNCATE TABLE defenses RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('defenses').insert(defenses)
    })
}
