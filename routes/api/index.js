const router = require("express").Router();
const twitterRoutes = require("./tweets");

router.use("/tweets", twitterRoutes);

module.exports = router;