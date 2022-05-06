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
