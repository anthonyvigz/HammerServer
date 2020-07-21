const server = require("./server.js");

require("dotenv").config();

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`This is the Hammer Server running on port ${port}`);
});
