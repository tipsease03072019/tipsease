const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const db = require("../../database/db");

const {
  authenticate,
  generateToken,
  jwtSecret
} = require("../../auth/authenticate");

router.get("/", (req, res) => {
  db("customers")
    .then(customers => res.status(200).send(customers))
    .catch(err => next(err));
});

router.post("/register", (req, res) => {
  const newUser = req.body;
  const hash = bcrypt.hashSync(newUser.password, 12);
  newUser.password = hash;
  db("customers")
    .insert(newUser)
    .then(ids => {
      const token = generateToken(newUser);
      res.status(201).json({
        ids,
        message: "Registered",
        token
      });
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
