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

// apply middleware here, above the routes listed below
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// implement signups route 
app.use('/signups', signupsRouter)

// implement 500 error route
app.use(function (err, req, res, next){
    console.error(err.stack)
    res.status(500).send('Something is broken.')
})

// implement 404 error route
app.use(function (res, req, next){
    res.status(404).send('Sorry we could not find that.')
}) 

