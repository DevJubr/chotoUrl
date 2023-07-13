const router = require("express").Router();
const urlController = require("../controllers/urlController.js");

router.post("/url", urlController);
module.exports = router;
