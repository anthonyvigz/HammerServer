const router = require("express").Router();
const bcrypt = require("bcryptjs");

const User = require("../helpers/usersModel.js");
const jwt = require("jsonwebtoken");

// authentication middleware
const authentication = require("../middleware/authentication");

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  // Finds user by email

  User.getUserByUsername(username)
    .then((user) => {
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

router.put("/updateExclude", authentication, (req, res) => {
  let { exclude } = req.body;

  User.updateExclude(exclude)
    .then((list) => {
      res.status(200).json({
        exclude: list,
        message: `New exclude list: ${exclude}`,
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
