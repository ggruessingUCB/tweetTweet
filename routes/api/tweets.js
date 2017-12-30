const router = require("express").Router();
const tweetController = require("../../controllers/tweetcontroller");

router.route("/").get(tweetController.findBill);

router.route("/:id").get(tweetController.findQuery);

module.exports = router;