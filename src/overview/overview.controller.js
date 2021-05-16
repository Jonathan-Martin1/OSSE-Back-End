const service = require('./overview.service')
// needs updated
const list = async (req, res, next) => {
  const knex = req.app.get('db')
  const isShowing = req.query.overview_showing

  const overview = !isShowing
    ? await service.list(knex)
    : await service.list(knex, isShowing)
  for (const overviews of overview) {
    overviews.id = await service.listOverviewById(knex, overview.overview_id)
  }
  res.json({ data: overview })
}

module.exports = {
  list,
}
