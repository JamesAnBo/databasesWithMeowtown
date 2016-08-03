
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Cats').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('Cats').insert({name: 'Greg', personId: 1}),
        knex('Cats').insert({name: 'Harold', personId: 1}),
        knex('Cats').insert({name: 'George', personId: 2}),
        knex('Cats').insert({name: 'Harry', personId: 5}),
        knex('Cats').insert({name: 'Lola', personId: 1}),
        knex('Cats').insert({name: 'Sarah', personId: 2}),
      ]);
    });
};
