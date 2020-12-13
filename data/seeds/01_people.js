
exports.seed = function(knex) {
  // Deletes ALL existing entries
  const people = [
    {
      name: 'Darth Vader'
    },
    {
      name: 'Luke Skywalker'
    },
    {
      name: 'R2D2'
    }
  ]
      // Inserts seed entries
      return knex('people').insert(people);
};
