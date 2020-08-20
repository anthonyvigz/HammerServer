const db = require("../data/db-config"); // imports database

// functions for dealing with CRU for users

module.exports = {
  // Read
  getUser,

  // Update
  updateExclude,
};

async function getUser() {
  const user = await db.from("user").select("*");

  return user[0];
}

async function updateExclude(list) {
  console.log("here1");
  return db("user").update({ exclude: list });
}
