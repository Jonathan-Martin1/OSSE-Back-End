const listOverviewById = (knex, overviewId) =>
  knex('overviews as ov').where({ 'ov.overview_id': overviewId })

module.exports = {
  listOverviewById,
}
