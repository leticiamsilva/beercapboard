const express = require("express");
const router = express.Router();
const controller = require("./beercapboard.controller");

router.get("/getOneById/:id", controller.getOneById);
router.get("/getAllByUserId/:idUser", controller.getAllByUserId);

module.exports = router;