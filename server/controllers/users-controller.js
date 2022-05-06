// Import database
const knex = require('./../db')

// Retrieve all signups
exports.signupsAll = async (req, res) => {
      // Get all signups from database
      knex
        .select('*') // select all records
        .from('signups') // from 'signups' table
        .then(userData => {
        // Send signups extracted from database in response
        res.json(userData)
        })
        .catch(err => {
        // Send an error message in response
        res.json({ message: `There was an error retrieving books: ${err}`})
        })
}

// Create new signup
exports.signupsCreate = async (req, res) => {
    // Add new signup to the database
    knex('signups')
    .insert({ // insert new record, a signup
        'name': req.body.name,
        'email': req.body.email
    })
    .then(() => {
    // Send a success message in response
    res.json({ message: `Signup \`${req.body.email}\' from ${req.body.name} created.` })
    })
    .catch(err => {
     // Send an error message in response
        res.json({ message: `There was an error creating ${req.body.name} signup: ${err}`})
    })
}
