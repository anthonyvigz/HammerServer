const router = require("express").Router();
const bcrypt = require("bcrypt.js");

const Data = require("../models/dataModel.js");

// GET DATA

router.get("/get", (req, res) => {
  Data.getData()
    .then((data) => {
      res.status(201).json({ data: data });
    })
    .catch((err) => {
      console.log(err);
    });
});
