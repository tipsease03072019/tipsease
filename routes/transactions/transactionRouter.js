const express = require("express");
const router = express.Router();
const db = require("../../database/db");
const bcrypt = require("bcryptjs");

const {
  authenticate,
  generateToken,
  jwtSecret,
  decode,
  decode1
} = require("../../auth/authenticate");

// router.get("/", (req, res) => {
//   db("transactions")
//     .then(transactions => res.status(200).send(transactions))
//     .catch(err => console.log(err));
// });

router.get("/:id", decode1, (req, res) => {
  if (req.params.id === req.headers.UID) {
    const id = req.body.users_id;
    db("transactions")
      .where("users_id", "=", id)
      .then(transactions => {
        res.status(200).send(transactions);
        db("users")
          .where("id", "=", id)
          .select("balance")
          .then(res1 => {
            res.status(201).json(res2);
          });
      })
      .catch(err => console.log(err));
  }
});

router.post("/:id", (req, res) => {
  const pay = req.body;
  const id = req.params.id;
  db("transactions")
    .insert(pay)
    .then(res1 => {
      db("users")
        .where("id", "=", id)
        .select("balance")
        .increment("balance", pay.tip)
        .then(res2 => {
          res.status(201).json(res2);
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

// router.put("/:id", (req, res) => {
//   const tip = req.body;
//   const id = req.params.id;
//   db("users")
//     .where("id", "=", id)
//     .select("id", "username")
//     .increment(
//       {
//         balance: tip.balance
//       },
//       ["balance"]
//     )
//     .then(user => {
//       res.status(200).json({
//         id,
//         message: `Successfully tipped $${tip.balance}.`
//       });
//     })
//     .catch(err => res.status(500).json(err));
// });

module.exports = router;
