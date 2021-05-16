const router = require('express').Router()
const controller = require('./galexyview.controller')
const methodNotAllowed = require('../errors/methodNotAllowed')

router.route('/').get(controller.show).all(methodNotAllowed)

router.route('/:galexyViewId').get(controller.list).all(methodNotAllowed)

router
  .route('/:galexyViewIdId/:userId')
  .get(controller.list)
  .post(controller.create)
  .put(controller.update)
  .delete(controller.destroy)
  .all(methodNotAllowed)
module.exports = router
