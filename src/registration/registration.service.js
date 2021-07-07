const knex = require('../db/connection');

const listFleetsById = (knex, registrationId) =>
  knex('registration as r').where({ 'r.registration_id': registrationId });

const list = () => {
  return knex('registration').select('*').orderBy('registration_id');
};

const show = () => {
  return knex('registration').select('*');
};

const read = (
  registration_id,
  username,
  first_name,
  last_name,
  email,
  password,
  password_match
) => {
  return knex('registration')
    .select('*')
    .where(
      { registration_id: registration_id },
      { username: username },
      { first_name: first_name },
      { last_name: last_name },
      { email: email },
      { password: password },
      { password_match: password_match }
    );
};

const create = (
  registration_id,
  username,
  first_name,
  last_name,
  email,
  password,
  password_match
) => {
  return knex('registration').insert([
    {
      registration_id: registration_id,
      username: username,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      password_match: password_match,
    },
  ]);
};

const update = (
  username,
  first_name,
  last_name,
  email,
  password,
  password_match,
  updatedRegistration
) => {
  return knex('registration')
    .where([
      { username: username },
      { first_name: first_name },
      { last_name: last_name },
      { email: email },
      { password: password },
      { password_match: password_match },
    ])
    .update(updatedRegistration)
    .returning('*');
};

const destroy = (
  registration_id,
  username,
  first_name,
  last_name,
  email,
  password,
  password_match
) => {
  return knex('registration')
    .delete(
      registration_id,
      registration_id,
      username,
      first_name,
      last_name,
      email,
      password,
      password_match
    )
    .returning('*');
};

module.exports = {
  list,
  show,
  read,
  create,
  listFleetsById,
  update,
  destroy,
};
