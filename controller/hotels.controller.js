const Hotel = require("../models/Hotel");

const hotelController = {};

hotelController.createHotel = async(req, res) => {
    
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = hotelController;