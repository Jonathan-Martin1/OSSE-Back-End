const registrations = require('../seed-data/registration-data')

exports.seed = function (knex) {
  return knex
    .raw('TRUNCATE TABLE registration RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('registration').insert(registrations)
    })
}
