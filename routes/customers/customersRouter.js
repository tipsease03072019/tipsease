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

router.post("/login", (req, res) => {
  const creds = req.body;
  db("customers")
    .where({ username: creds.username })
    .first()
    .then(customer => {
      if (customer && bcrypt.compareSync(creds.password, customer.password)) {
        const token = generateToken(customer);
        res.status(200).json({
          message: `Welcome ${
            customer.username
          }! Successfully loggin in, here's a cookie and a token`,
          token,
          account_type: customer.account_type
        });
      } else {
        res.status(401).json({ message: "You shall not pass!" });
      }
    })
    .catch(err => console.log(err));
});

module.exports = router;
