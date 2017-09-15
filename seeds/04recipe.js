
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {id: 1,
        name: 'Kev Pepperoni Pizza',
        person_name : "Kevin Anderson",
    },

]);
    });
};
