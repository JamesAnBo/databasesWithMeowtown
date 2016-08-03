var config = require('./knexfile').development
var knex = require('knex')(config)

function OwnCats(){
  return knex('Persons')
    .join('Cats', 'Persons.id', 'Cats.personId')
}

module.exports = {
  OwnCats: OwnCats
}
