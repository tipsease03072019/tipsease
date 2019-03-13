const express = require("express");
const router = express.Router();
const db = require("../../database/db");
const bcrypt = require("bcryptjs");

const {
  authenticate,
  generateToken,
  jwtSecret
} = require("../../auth/authenticate");

// router.get("/", (req, res) => {
//   db("transactions")
//     .then(transactions => res.status(200).send(transactions))
//     .catch(err => console.log(err));
// });

router.get("/:id", authenticate, (req, res) => {
  const id = req.params.id;
  db("transactions")
    .where("users_id", "=", id)
    .then(transactions => res.status(200).send(transactions))
    .catch(err => console.log(err));
});

router.post("/:id", (req, res) => {
  const pay = req.body;
  const id = req.params.id;
  db("transactions")
    .insert(pay)
    .where("users_id", "=", id)
    .select("user_balance")
    .then(res1 => {
      console.log(res1.user_balance);
      let new_balance = res1.user_balance + pay.tip;
      db("users")
        .where("id", "=", id)
        .select("balance")
        .update({ balance: new_balance })
        .then(res2 => {
          res.status(200).json(res2);
          new_balance;
          console.log(res2, new_balance, pay.tip);
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
