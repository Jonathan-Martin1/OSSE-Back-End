const router = require('express').Router()
const controller = require('./research.controller')
const methodNotAllowed = require('../errors/methodNotAllowed')

router.route('/').get(controller.show).all(methodNotAllowed)

router.route('/:researchId').all(methodNotAllowed)

router
  .route('/:researchId/:userId')
  .get(controller.list)
  .put(controller.update)
  .delete(controller.destroy)
  .all(methodNotAllowed)

module.exports = router
