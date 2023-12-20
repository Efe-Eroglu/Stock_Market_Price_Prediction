const express = require("express")
const router = express.Router();

const userRouter = require("./users.js")
const shareRouter = require("./share.js")

router.use("/users",userRouter);
router.use("/share",shareRouter);

module.exports = router;