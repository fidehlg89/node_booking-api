const { createError } = require("../errors/handleError");
const Hotel = require("../models/Hotel");
const {response} = require("../utils/utils");

const hotelController = {};

//CREATE
hotelController.createHotel = async(req, res, next) => {
    
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        next(error);
    }
}

//UPDTAE
hotelController.updateHotel = async(req, res, next) => {
    
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            {new:true})
        res.status(200).json(updateHotel);
    } catch (error) {
        next(error);
    }
}

//DELETE
hotelController.deleteHotel = async(req, res, next) =>{
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json(response("delete"));
    } catch (error) {
        next(error);
    }
}

//GET
hotelController.getHotel = async(req, res, next)=>{
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (error) {
        next(error);
    }
}

//GET ALL
hotelController.getAllHotel = async(req, res, next) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (error) {
        next(error);
    }
}

module.exports = hotelController;