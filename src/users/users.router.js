const router = require('express').Router()
const controller = require('./users.controller')
const methodNotAllowed = require('../errors/methodNotAllowed')

router
  .route('/')
  .get(controller.show)
  .post(controller.create)
  .put(controller.update)
  .delete(controller.destroy)
  .all(methodNotAllowed)

module.exports = router
