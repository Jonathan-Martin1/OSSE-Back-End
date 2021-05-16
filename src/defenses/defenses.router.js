const router = require('express').Router()
const controller = require('./defenses.controller')
const methodNotAllowed = require('../errors/methodNotAllowed')

router.route('/').get(controller.show).all(methodNotAllowed)

router
  .route('/:defensesId')
  .get(controller.list)
  .post(controller.create)
  .put(controller.update)
  .all(methodNotAllowed)

router
  .route('/:defensesId/:userId')
  .get(controller.list)
  .put(controller.update)
  .delete(controller.destroy)
  .all(methodNotAllowed)

module.exports = router
