const express = require("express")
const router = express.Router();

const userRouter = require("./users.js")

router.use("/users",userRouter);

module.exports = router;