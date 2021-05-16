const research = require('../seed-data/research-data')

exports.seed = function (knex) {
  return knex
    .raw('TRUNCATE TABLE research RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('research').insert(research)
    })
}
