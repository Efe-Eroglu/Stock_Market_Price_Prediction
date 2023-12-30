const express = require("express")
const router = express.Router();

const userRouter = require("./users.js")
const randomForest_router = require("./randomForest.js")
const annRouter = require("./ann.js")
const decisionTree_router = require("./dtree.js")

router.use("/users",userRouter);
router.use("/random-forest",randomForest_router);
router.use("/ann",annRouter);
router.use("/decision-tree",decisionTree_router);

module.exports = router;