const router = require('express').Router()
const controller = require('./shipyard.controller')
const methodNotAllowed = require('../errors/methodNotAllowed')

router.route('/').get(controller.show).all(methodNotAllowed)

router.route('/:shipyardId').all(methodNotAllowed)

router
  .route('/:shipyardId/:userId')
  .get(controller.list)
  .put(controller.update)
  .delete(controller.destroy)
  .all(methodNotAllowed)

module.exports = router
