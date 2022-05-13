const router = require("express").Router();

const {createHotel, 
    updateHotel,
    deleteHotel,
    getHotel,
    getAllHotel} = require('../controller/hotels.controller');

//CREATE
router.post("/", createHotel)

//UPDATE
router.put("/:id", updateHotel)

//DELETE
router.delete("/:id", deleteHotel)

//GET
router.get("/:id", getHotel)

//GET ALL
router.get("/", getAllHotel)


module.exports = router;