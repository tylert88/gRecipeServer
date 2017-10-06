'use strict';
const review = require('../seed_data/review');


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('review').del()
    .then(function () {
      // Inserts seed entries
      return knex('review').insert(review);
    });
};
