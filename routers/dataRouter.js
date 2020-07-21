const router = require("express").Router();
const bodyParser = require("body-parser");

const Data = require("../models/dataModel.js");

router.use(bodyParser.urlencoded({ extended: false }));

// GET DATA

router.get("/get", (req, res) => {
  Data.getData()
    .then((data) => {
      res.status(201).json({ data: data });
    })
    .catch((err) => {
      console.log("here", err);
    });
});

router.get("/getId", (req, res) => {
  const id = req.body;

  Data.getDataById(id)
    .then((data) => {
      res.status(201).json({ data: data });
    })
    .catch((err) => {
      console.log("here", err);
    });
});

router.post("/add", (req, res) => {
  const { watchlist } = req.body;
  console.log(req.body);

  Data.updateData(watchlist)
    .then((newData) => {
      res.status(200).json({ newData });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

module.exports = router;
