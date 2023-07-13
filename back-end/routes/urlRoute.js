const router = require("express").Router();
const urlController = require("../controllers/urlController.js");

router.post("/api/v1/url", urlController);
module.exports = router;
