const express = require("express");

const userRouter = require("../routes/users/userRouter");
const transactionRouter = require("../routes/transactions/transactionRouter");

const router = express.Router();

router.use("/users", userRouter);
router.use("/transactions", transactionRouter);

module.exports = router;
