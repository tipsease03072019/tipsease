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
    db("transactions")
      .where("uid", "=", req.params.id)
      .then(transactions => {
        res.status(200).send(transactions);
        db("users")
          .where("uid", "=", req.params.id)
          .select("balance", "username")
          .then(res => {
            res.status(201).json(res);
          });
      })
      .catch(err => console.log(err));
  }
});

router.post("/:id", (req, res) => {
  const pay = req.body;
  console.log(req.body);
  db("transactions")
    .insert(pay)
    .then(res1 => {
      db("users")
        .where("uid", "=", req.params.id)
        .select("balance")
        .increment("balance", pay.tip)
        .then(res2 => {
          console.log(req.params.id);
          res.status(201).json({
            message: `Tipped $${pay.tip}.`
          });
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
