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
  db("employees")
    .select("id", "username", "email", "img_url")
    .then(employees => res.status(200).json(employees))
    .catch(err => console.log(err));
});

router.post("/register", (req, res) => {
  const newUser = req.body;
  const hash = bcrypt.hashSync(newUser.password, 12);
  newUser.password = hash;
  db("employees")
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
