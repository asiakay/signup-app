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

