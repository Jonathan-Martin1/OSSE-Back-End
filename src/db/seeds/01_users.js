const user = require('../seed-data/user-data')

exports.seed = function (knex) {
  return knex
    .raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('users').insert(user)
    })
}
