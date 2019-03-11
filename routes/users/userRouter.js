const express = require("express");
const router = express.Router();
const db = require("../../database/db");
const bcrypt = require("bcryptjs");

const {
  authenticate,
  generateToken,
  jwtSecret
} = require("../../auth/authenticate");

router.get("/", (req, res) => {
  db("users")
    .select("id", "username", "email", "img_url", "account_type", "created_at")
    .then(users => res.status(200).send(users))
    .catch(err => console.log(err));
});

router.post("/register", (req, res) => {
  const creds = req.body;
  const hash = bcrypt.hashSync(creds.password, 10);
  creds.password = hash;
  db("users")
    .insert(creds)
    .then(id => {
      const token = generateToken(creds);
      res.status(201).json({
        id: id[0],
        message: "registered",
        token
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  const creds = req.body;
  db("users")
    .where({ username: creds.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${
            user.username
          }! Successfully logged in, here's a token`,
          token
        });
      } else {
        res.status(401).json({ message: "You shall not pass!" });
      }
    })
    .catch(err => console.log(err));
});

module.exports = router;
