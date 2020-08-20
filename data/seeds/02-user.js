const bcrypt = require("bcryptjs");

const hash = bcrypt.hashSync(process.env.PASS, 10);

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("user").insert([
        { username: "pavilion", password: hash, exclude: "DUST" },
      ]);
    });
};
