const service = require('./leaderboard.service')
// needs updated
const list = async (req, res, next) => {
  const knex = req.app.get('db')
  const isShowing = req.query.leaderboard_showing

  const leaderboard = !isShowing
    ? await service.list(knex)
    : await service.list(knex, isShowing)
  for (const leaderboards of leaderboard) {
    leaderboards.id = await service.listLeaderBoardById(
      knex,
      leaderboard.leaderboard_id
    )
  }
  res.json({ data: leaderboard })
}

module.exports = {
  list,
}
