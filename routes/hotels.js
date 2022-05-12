const router = require("express").Router();

const {createHotel} = require('../controller/hotels.controller');

router.post("/", createHotel)

module.exports = router;