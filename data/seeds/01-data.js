exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("data")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("data").insert([
        { id: 1, watchlist: "Awaiting first entry" },
      ]);
    });
};
