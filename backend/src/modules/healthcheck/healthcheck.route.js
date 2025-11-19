const express = require("express");
const router = express.Router();
const controller = require("./healthcheck.controller");

router.get("/", controller.status);

module.exports = router;