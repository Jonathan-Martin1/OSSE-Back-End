const router = require('express').Router()
const controller = require('./store.controller')
const methodNotAllowed = require('../errors/methodNotAllowed')

router.route('/').get(controller.show).all(methodNotAllowed)

router.route('/:storeId').all(methodNotAllowed)

router
  .route('/:storeId/:userId')
  .get(controller.list)
  .post(controller.create)
  .put(controller.update)
  .delete(controller.destroy)
  .all(methodNotAllowed)

module.exports = router
