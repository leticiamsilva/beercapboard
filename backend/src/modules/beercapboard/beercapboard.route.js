const express = require("express");
const router = express.Router();
const controller = require("./beercapboard.controller");

router.get("/getOneById/:id", controller.getOneById);

module.exports = router;