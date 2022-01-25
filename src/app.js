const morgan = require('morgan')
const express = require('express')
const cors = require('cors')

const errorHandler = require('./errors/errorHandler')
const notFound = require('./errors/notFound')

const loginRouter = require('./login/login.router')
const overviewRouter = require('./overview/overview.router')
const resourcesRouter = require('./resources/resources.router')
const productionRouter = require('./production/production.router')
const shipyardRouter = require('./shpyard/shipyard.router')
const researchRouter = require('./research/research.router')
const fleetRouter = require('./fleet/fleet.router')
const galexyViewRouter = require('./galexy-view/galexyview.router')
const allianceRouter = require('./alliance/alliance.router')
const storeRouter = require('./store/store.router')
const reviewsRouter = require('./reviews/reviews.router')
const registrationRouter = require('./registration/registration.router')
const leaderBoardRouter = require('./leaderboard/leaderboard.router')
const defensesRouter = require('./defenses/defenses.router')
const minesRouter = require('./mines/mines.router')

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/login', loginRouter)
app.use('/overview', overviewRouter) // Throws error type: service.list is not a function in overview.controller.js:8:21
app.use('/mines', minesRouter)
app.use('/production', productionRouter)
app.use('/shipyard', shipyardRouter)
app.use('/defenses', defensesRouter)
app.use('/research', researchRouter)
app.use('/resources', resourcesRouter)
app.use('/fleet', fleetRouter)
app.use('/galexy', galexyViewRouter)
app.use('/reviews', reviewsRouter)
app.use('/alliance', allianceRouter)
app.use('/store', storeRouter)
app.use('/registration', registrationRouter)
app.use('/leaderboard', leaderBoardRouter) // TODO: endless loop

app.use(notFound)

app.use(errorHandler)

module.exports = app
