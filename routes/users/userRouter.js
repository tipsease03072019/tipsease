const express = require("express");
const router = express.Router();
const db = require("../../database/db");
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  db("users")
    .then(users => res.status(200).send(users))
    .catch(err => next(err));
});

router.post("/register", (req, res) => {
  const newUser = req.body;
  const hash = bcrypt.hashSync(newUser.password, 12);
  newUser.password = hash;
  db("users")
    .insert(newUser)
    .then(ids => {
      if (!req.body.username || !req.body.password || !req.body.account_type) {
        res.status(401).json({
          message: "Please provide a username, password and account type."
        });
      } else {
        const token = generateToken(newUser);
        res.status(201).json({
          ids,
          message: "Registered",
          token
        });
      }
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
