const express = require("express");
const router = express.Router();
const db = require("../../database/db");
const bcrypt = require("bcryptjs");
const admin = require("../../config/admin.js");

const {
  authenticate,
  generateToken,
  jwtSecret,
  decode
} = require("../../auth/authenticate");

router.get("/", (req, res) => {
  db("users")
    .select("id", "username", "img_url", "account_type", "created_at")
    .where({
      account_type: "employee"
    })
    .then(users => res.status(200).send(users))
    .catch(err => console.log(err));
});

// router.get("/u", (req, res) => {
//   db("users")
//     .then(users => res.status(200).send(users))
//     .catch(err => console.log(err));
// });

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
        message: "Registered",
        account_type: req.body.account_type,
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
          account_type: user.account_type,
          id: user.id,
          token
        });
      } else {
        res.status(401).json({
          message:
            "You shall not pass! Please provide a valid username and password."
        });
      }
    })
    .catch(err => console.log(err));
});

router.get("/:id", authenticate, (req, res) => {
  db("users")
    .where({
      id: req.params.id
    })
    .then(user => {
      res.status(200).json(user[0]);
    })
    .catch(err => res.status(500).json(err));
});

router.put("/:id", decode, async (req, res) => {
  if (req.params.id === req.body.uid) {
    let changes = req.body;

    for (x in changes) {
      console.log(x);
      console.log(changes[x]);
      await db("users")
        .where({
          id: req.params.id
        })
        .update(`${x}`, `${changes[x]}`);
    }
    res.status(200).json({
      message: "Updated."
    });
  }
});

router.delete("/:id", authenticate, (req, res) => {
  db("users")
    .where({
      id: req.params.id
    })
    .del()
    .then(count => {
      if (count) {
        res.status(201).json({
          "User Deleted": count,
          message: "User was successfully deleted."
        });
      } else {
        res.status(404).json({
          error: `User with ID ${req.params.id} not found.`
        });
      }
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
