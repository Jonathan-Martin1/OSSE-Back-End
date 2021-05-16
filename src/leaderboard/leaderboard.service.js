const listleaderBoardById = (knex, leaderBoardId) =>
  knex('leaderBoards as lb').where({ 'lb.leaderBoard_id': leaderBoardId })

module.exports = {
  listleaderBoardById,
}
