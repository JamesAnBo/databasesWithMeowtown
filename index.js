var config = require('./knexfile').development
var knex = require('knex')(config)

function personsOwnCats(){
  return knex('Persons')
    .join('Cats', 'Persons.id', 'Cats.personId')
    .select('Persons.id', 'Cats.name')
}
