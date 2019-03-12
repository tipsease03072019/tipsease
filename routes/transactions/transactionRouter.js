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
  db("transactions")
    .then(transactions => res.status(200).send(transactions))
    .catch(err => console.log(err));
});

router.get("/:id", (req, res) => {
  db("users")
    .where({
      id: req.params.id
    })
    .then();
  db("transactions")
    .then(user => res.status(200).send(user))
    .catch(err => console.log(err));
});

router.put("/:id", (req, res) => {
  let pay = req.body;
  let id = req.params.id;
  db("users")
    .where("id", "=", id)
    .select("id", "username")
    .increment(
      {
        balance: pay.balance
      },
      ["balance"]
    )
    .then(user => {
      res.status(200).json({
        id,
        message: `Successfully tipped $${pay.balance}.`
      });
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
