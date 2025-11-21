const express = require("express");
const router = express.Router();
const controller = require("./beercapboard.controller");

router.get("/getOneById/:id", controller.getOneById);
router.get("/getAllByUserId/:idUser", controller.getAllByUserId);
router.get("/getAllResumeByUserIdAndIdDBeerCapBoard/:idUser/:idBeerCapBoard", controller.getAllResumeByUserIdAndIdDBeerCapBoard);
router.post("/createBeer/:idUser", controller.createBeer);


module.exports = router;