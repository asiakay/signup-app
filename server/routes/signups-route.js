// Import express
const express = require('express')

// Import signups-controller
const signupsRoutes = require('./../controllers/signups-controller.js')

// Create router 
const router = express.Router()

// Add route for GET request to retrieve all signups
// In server.js, signups route is specified as '/signups'
// this means that '/all' translates to '/signups/all'
router.get('/all', signupsRoutes.routesAll)

// Add route for POST request to create new signup
// In server.js, signups route is specified as '/books'
// this means that '/create' translates to '/signups/create'
router.post('/create', signupsRoutes.signupsCreate)

