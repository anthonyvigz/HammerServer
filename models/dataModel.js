const db = require("../data/db-config"); // imports database

module.exports = {
  getData,

  // add new data for the day
  updateData,
};

async function updateData(data) {
  const [newData] = await db.from("data").insert(data).returning("*");

  return newData || null;
}

async function getData() {
  const [data] = await db.from("data").select("*");

  return data || null;
}
