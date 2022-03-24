/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// seeds/01_products.js
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("bicicletas")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('bicicletas').insert([
        { id: 1, color: 'rojo', modelo: 'bmx', lon: 19.284770943610578, lat: 2.010101 },
        { id: 2, color: 'blanca', modelo: 'Benotto', lon: 1.010101, lat: 2.010101 },
      ]);
    });
};
