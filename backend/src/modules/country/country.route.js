const express = require("express");
const router = express.Router();
const countryService  = require("./country.service");

router.get("/countries", (req, res) => {
  res.json(countryService.getCountries());
});

module.exports = router;