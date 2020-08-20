const bcrypt = require("bcryptjs");
exports.up = function (knex) {
  return knex.schema.createTable("user", (tbl) => {
    tbl.string("username", 128).defaultTo("pavilion");
    tbl.string("password", 128).defaultTo(process.env.PASS);
    tbl.text("exclude", 128).defaultTo("DUST");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};
