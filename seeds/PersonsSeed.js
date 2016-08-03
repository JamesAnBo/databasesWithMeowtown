
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Persons').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('Persons').insert({lastName: 'Smith', firstName: 'John', email: 'johnsmith@gmail.com', address: '23 Main St.', city: 'Madrid' }),
        knex('Persons').insert({lastName: 'Dickerson', firstName: 'Tip', email: 'helloworld@gmail.com', address: '56 Green St.', city: 'Paris' }),
        knex('Persons').insert({lastName: 'Bond', firstName: 'James', email: 'xxcoolguyxx69@gmail.com', address: '154 Kool Av.', city: 'Munich' }),
        knex('Persons').insert({lastName: 'Tim', firstName: 'Bruce', email: 'harry_kim@gmail.com', address: '21 Jump St.', city: 'Milan' }),
        knex('Persons').insert({lastName: 'Suratami', firstName: 'Cindy', email: 'ilovecats34@gmail.com', address: '97 Broad Blvd.', city: 'Wellington' }),
        knex('Persons').insert({lastName: 'Power', firstName: 'Max', email: 'ilovedogs35@gmail.com', address: '23 Main St.', city: 'Madrid' }),
      ]);
    });
};
