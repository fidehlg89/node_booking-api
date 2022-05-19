const router = require("express").Router();

const {
    createRoom,
    updateRoom,
    deleteRoom,
    updateRoomAvailability,
    getRoom,
    getRooms
} = require('../controller/room.controller')

//CREATE
router.post("/:hotelid", createRoom)

//UPDATE
router.put("/availability/:id", updateRoomAvailability)
router.put("/:id", updateRoom)

//DELETE
router.delete("/:id/:hotelid", deleteRoom)

//GET
router.get("/:id", getRoom)

//GET ALL
router.get("/", getRooms)

module.exports = router