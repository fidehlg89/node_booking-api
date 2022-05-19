const router = require("express").Router();
const {
    admin
} = require('../utils/verifyToken')

const { createHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    getAllHotel, 
    countByCity,
    countByType,
    getHotelRooms} = require('../controller/hotels.controller');

//CREATE
router.post("/", createHotel)

//UPDATE
router.put("/:id", updateHotel)

//DELETE
router.delete("/:id", deleteHotel)

//GET
router.get("/find/:id", getHotel)

//GET ALL
router.get("/", getAllHotel)

//GET COUNT BY CITY
router.get("/count-by-city", countByCity)

//GET COUNT BY TYPE
router.get("/count-by-type", countByType)

//GET ROOMS BY HOTEL
router.get("/room/:id", getHotelRooms)



module.exports = router;