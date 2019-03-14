const express = require("express");
const router = express.Router();
const db = require("../../database/db");
const bcrypt = require("bcryptjs");
const admin = require("../../config/admin.js");

const {
  authenticate,
  generateToken,
  jwtSecret,
  decode,
  decode1
} = require("../../auth/authenticate");

router.get("/", (req, res) => {
  db("users")
    .select("id", "username", "img_url", "account_type", "created_at","uid")
    .where({
      account_type: "employee"
    })
    .then(users => res.status(200).send(users))
    .catch(err => console.log(err));
});

router.post("/register", (req, res) => {
  const creds = req.body;
  db("users")
    .insert(creds)
    .then(id => {
      res.status(201).json({
        id: id[0],
        message: "Registered",
        account_type: req.body.account_type,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.post("/login", (req, res) => {
//   const creds = req.body;
//   db("users")
//     .where({ username: creds.username })
//     .first()
//     .then(user => {
//       if (user && bcrypt.compareSync(creds.password, user.password)) {
//         const token = generateToken(user);
//         res.status(200).json({
//           message: `Welcome ${
//             user.username
//           }! Successfully logged in, here's a token`,
//           account_type: user.account_type,
//           id: user.id,
//           token
//         });
//       } else {
//         res.status(401).json({
//           message:
//             "You shall not pass! Please provide a valid username and password."
//         });
//       }
//     })
//     .catch(err => console.log(err));
// });

router.get("/:id", decode1, (req, res) => {
  db("users")
    .where({
      uid: req.params.id
    })
    .then(user => {
      res.status(200).json(user[0]);
    })
    .catch(err => res.status(500).json(err));
});

router.put("/:id", decode, async (req, res) => {
  console.log("params id ",req.params.id )
  console.log("body.uid ", req.body.UID)
  if (req.params.id === req.body.UID) {
    let changes = req.body;

    for (x in changes) {
      // try {
        if(x != "token"){
        await db("users")
        .where({
          uid: req.params.id
        })
        .update(`${x}`, `${changes[x]}`);
      }
      // } catch (error) {
      //   console.log(error)
      //   res.status(500).json(error);
      //   break;
      // }
      
      
    }
    res.status(200).json({
      message: "Updated."
    });
  } else {
    res.status(401).json({
      message: "Unauthorized access."
    });
  }
});

router.delete("/:id", decode, (req, res) => {
  if (req.params.id === req.body.uid) {
    db("users")
      .where({
        uid: req.params.id
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
  } else {
    res.status(401).json({
      message: "Unauthorized access."
    });
  }
});

module.exports = router;
