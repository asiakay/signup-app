// Import path module
const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/database.sqlite')

// Create connection to SQLite database
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: dbPath,
    },
    useNullAsDefault: true
})

// Create a table in the database called "books"
knex.schema
// Make sure no "signups" table exists
  // before trying to create new
    .hasTable('signups')
        .then((exists) => {
            if (!exists){
        // If no "signups" table exists
        // create new, with "id", "name", and "email" columns
        // and use "id" as a primary identification
        // and increment "id" with every new record (book)
        return knex.schema.createTable('signups', (table) => {
            table.increments('id').primary()
            table.string('name')
            table.string('email')
        })
        .then(() => {
            // Log success message
            console.log('Table \'Signups\' created')
        })
        .catch((error) => {
            console.error(`There was an error creating table:  ${error}`)
                })
            }
        })
        .then(() => {
            console.log('done')
        })
        .catch((error) => {
            console.error(`There was an error setting up the database: ${error}`)
        })
// Just for debugging purposes:
// Log all data in "signu" table
knex.select('*').from('signups')
        .then(data => console.log('data:', data))
        .catch(err => console.log(err))

// Export the database
module.exports = knex