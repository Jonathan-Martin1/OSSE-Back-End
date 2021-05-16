const router = require('express').Router()
const controller = require('./fleet.controller')
const methodNotAllowed = require('../errors/methodNotAllowed')

router.route('/').get(controller.list).all(methodNotAllowed)

router.route('/:fleetId').get(controller.list).all(methodNotAllowed)

router
  .route('/:fleetId/:userId')
  .get(controller.list)
  .post(controller.create)
  .put(controller.update)
  .delete(controller.destroy)
  .all(methodNotAllowed)
module.exports = router
