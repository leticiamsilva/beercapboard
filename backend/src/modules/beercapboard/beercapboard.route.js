const express = require("express");
const router = express.Router();
const controller = require("./beercapboard.controller");

router.get("/getOneById/:id", controller.getOneById);
router.get("/getAllByIdBoard/:idBoard", controller.getAllByIdBoard);
router.get("/getAllBeerResumeByIdBeerCapBoard/:idBeerCapBoard", controller.getAllBeerResumeByIdBeerCapBoard);
router.post("/createBeer/:idBoard", controller.createBeer);


module.exports = router;