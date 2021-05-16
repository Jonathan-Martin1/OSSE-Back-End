const knex = require('../db/connection')

const listStoreById = (knex, storeId) =>
  knex('store as st').where({ 'st.store_id': storeId })

const list = () => {
  return knex('store').select('*').orderBy('store_id')
}

const show = () => {
  return knex('store').select('*')
}

const read = (store_id) => {
  return knex('store')
    .select('*')
    .where(
      { store_id: store_id },
      { subscriptions: subscriptions },
      { subscription_details: subscription_details },
      { subscription_price: subscription_price },
      { boosters: boosters },
      { booster_details: booster_details },
      { booster_price: booster_price }
    )
}

const create = (
  subscriptions,
  subscription_details,
  subscription_price,
  boosters,
  booster_details,
  booster_price
) => {
  return knex('store').insert(
    subscriptions,
    subscription_details,
    subscription_price,
    boosters,
    booster_details,
    booster_price,
    '*'
  )
}

const update = (store_id, updatedStore) => {
  return knex('store')
    .where(
      { store_id: store_id },
      { subscriptions: subscriptions },
      { subscription_details: subscription_details },
      { subscription_price: subscription_price },
      { boosters: boosters },
      { booster_details: booster_details },
      { booster_price: booster_price }
    )
    .update(updatedStore)
    .returning('*')
}

const destroy = (
  store_id,
  subscriptions,
  subscription_details,
  subscription_price
) => {
  return knex('store')
    .delete(store_id, subscriptions, subscription_details, subscription_price)
    .returning('*')
}

module.exports = {
  list,
  show,
  read,
  create,
  listStoreById,
  update,
  destroy,
}
