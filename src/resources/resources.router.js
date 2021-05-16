const router = require('express').Router()
const controller = require('./resources.controller')
const methodNotAllowed = require('../errors/methodNotAllowed')

router.route('/').get(controller.show).all(methodNotAllowed)

router.route('/:resourcesId').all(methodNotAllowed)

router
  .route('/:resourcesId/:userId')
  .get(controller.list)
  .put(controller.update)
  .delete(controller.destroy)
  .all(methodNotAllowed)

module.exports = router
