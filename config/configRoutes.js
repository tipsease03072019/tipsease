const express = require("express");

const customersRouter = require("../routes/customers/customersRouter");
const employeesRouter = require("../routes/employees/employeesRouter");
const userRouter = require("../routes/users/userRouter");

const router = express.Router();

router.use("/customers", customersRouter);
router.use("/employees", employeesRouter);
router.use("/users", userRouter);

module.exports = router;
