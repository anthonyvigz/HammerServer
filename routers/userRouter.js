const router = require("express").Router();
const bcrypt = require("bcryptjs");

const User = require("../models/usersModel.js");
const jwt = require("jsonwebtoken");

// authentication middleware
const authentication = require("../middleware/authentication");

router.post("/login", (req, res) => {
  let { password } = req.body;
  console.log(password);

  // Finds user by email

  User.getUser()
    .then((user) => {
      console.log(password, user.password);
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          user: user,
          message: `Welcome ${user.username}!`,
          token,
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/", (req, res) => {
  User.getUser()
    .then((user) => {
      res.status(201).json({ user: user });
    })

    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.put("/updateExclude", authentication, (req, res) => {
  let { exclude } = req.body;

  User.updateExclude(exclude)
    .then(() => {
      User.getUser()
        .then((user) => {
          res.status(201).json({ user: user });
        })

        .catch((err) => {
          res.status(500).json({ message: err });
        });
    })
    .catch((err) => {
      res.status(500).json({ message: "Couldn't update list" });
    });
});

// GENERATES A CRYPTED TOKEN BASED ON EMAIL AND USER ID

function generateToken(user) {
  const payload = {
    username: user.username,
  };

  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, process.env.JWT_SECRET, options);
}

module.exports = router;
