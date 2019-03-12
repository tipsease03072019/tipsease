const express = require("express");
const router = express.Router();
const db = require("../../database/db");
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  db("users")
    .select("id", "username", "balance")
    .where({
      account_type: "employee"
    })
    .then(users => res.status(200).send(users))
    .catch(err => console.log(err));
});

module.exports = router;
