const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const db = require("../../database/db");

const {
  authenticate,
  generateToken,
  jwtSecret
} = require("../../auth/authenticate");

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

module.export = router;
