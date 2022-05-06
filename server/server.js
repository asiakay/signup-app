// Import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

// import routes
const signupsRouter = require('./routes/signups-route')

// set default port for express app
const PORT = process.env.PORT || 4001

// Create expres app
const app = express()

// apply middleware 
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

