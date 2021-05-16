const knex = require('../db/connection')

const listDefensesById = (knex, defensesId) =>
  knex('defenses as df').where({ 'df.defenses_id': defensesId })

const list = () => {
  return knex('defenses').select('*').orderBy('defenses_id')
}

const show = () => {
  return knex('defenses').select('*')
}

const read = (defenses_id) => {
  return knex('defenses')
    .select('*')
    .where(
      { defenses_id: defenses_id },
      { defense: defense },
      { amount_of_defenses: amount_of_defenses }
    )
}

const create = (defenses) => {
  return knex('defenses').insert(defenses, '*')
}

const update = (defenses_id, updatedDefenses) => {
  return knex('defenses')
    .where(
      { defenses_id: defenses_id },
      { defense: defense },
      { amount_of_defenses: amount_of_defenses }
    )
    .update(updatedDefenses)
    .returning('*')
}

const destroy = (defenses_id, defense, amount_of_defenses) => {
  return knex('defenses')
    .delete(defenses_id, defense, amount_of_defenses)
    .returning('*')
}

module.exports = {
  list,
  show,
  read,
  create,
  listDefensesById,
  update,
  destroy,
}
