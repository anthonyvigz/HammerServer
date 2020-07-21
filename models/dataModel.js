const db = require("../data/db-config"); // imports database

module.exports = {
  getData,

  getDataById,

  // add new data for the day
  updateData,
};

async function updateData(data) {
  const [newData] = await db.from("data").insert(data).returning("*");

  return newData || null;
}

async function getData() {
  const results = await db.from("data").select("*");

  return results;
}

async function getDataById(id) {
  const [results] = await db.from("data").select("*").where({ id });

  return results || null;
}
