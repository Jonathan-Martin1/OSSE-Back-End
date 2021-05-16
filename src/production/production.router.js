const router = require('express').Router()
const controller = require('./production.controller')
const methodNotAllowed = require('../errors/methodNotAllowed')

router.route('/').get(controller.show).all(methodNotAllowed)

router.route('/:productionId').all(methodNotAllowed)

router
  .route('/:productionId/:userId')
  .get(controller.list)
  .post(controller.create)
  .put(controller.update)
  .delete(controller.destroy)
  .all(methodNotAllowed)

module.exports = router
