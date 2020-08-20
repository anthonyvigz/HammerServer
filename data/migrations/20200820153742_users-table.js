exports.up = function (knex) {
  return knex.schema.createTable("user", (tbl) => {
    tbl.string("username", 128);
    tbl.string("password", 128);
    tbl.text("exclude", 128);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};
