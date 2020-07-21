exports.up = function (knex) {
  return knex.schema.createTable("data", (tbl) => {
    tbl.increments("id");
    tbl.text("watchlist"); // The watchlist
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("data");
};
