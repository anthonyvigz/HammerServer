const db = require("../data/db-config"); // imports database

// functions for dealing with CRU for users

module.exports = {
  // Read
  getUserByUsername,

  // Update
  updateExclude,
};

async function getUserByUsername(username) {
  console.log(username);
  const [user] = await db.from("user").select("*");

  console.log(user);

  return user;
}

function updateExclude(list) {
  return db.from("user").where("pavilion").update(list);
}
