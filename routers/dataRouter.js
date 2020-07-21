const router = require("express").Router();

const Data = require("../models/dataModel.js");

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

router.post("/add", (req, res) => {
  const watchlist = req.body;

  Data.updateData(watchlist)
    .then((newData) => {
      console.log(watchlist);
      res.status(200).json({ newData });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

module.exports = router;
