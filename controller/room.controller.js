const Room = require('../models/Room')
const Hotel = require('../models/Hotel')
const { createError } = require('../errors/handleError');
const { response, formatDate } = require("../utils/utils");

const roomController = {}

roomController.createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id }
            })
        } catch (error) {
            next(error)
        }
    } catch (error) {
        next(error)
    }
}

roomController.updateRoom = async (req, res, next) => {
    try {
        const updateRoom = await Room.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true }
        )
        const date = formatDate(new Date())
        updateRoom.updated = date
        res.status(200).json(updateRoom)
    } catch (error) {
        next(error)
    }
}

roomController.updateRoomAvailability = async (req, res, next) => {
    try {
        await Room.updateOne(
            { "roomNumbers._id": req.params.id },
            {
                $push: {
                    "roomNumbers.$.unavailableDates": req.body.dates
                }
            }
        )

        res.status(200).json("Room status has been updated")

    } catch (error) {

    }
}

roomController.deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid
    try {
        await Room.findByIdAndDelete(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id }
            })
        } catch (error) {
            next(error)
        }
        res.status(200).json(response('delete'))
    } catch (error) {
        next(error)
    }
}

roomController.getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    } catch (err) {
        next(err);
    }
}

roomController.getRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err) {
        next(err);
    }
}


module.exports = roomController;