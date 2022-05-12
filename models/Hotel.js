const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { formatDate } = require('../utils/utils');

const HotelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    photos: {
        type: [String]
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    rooms: {
        type: [String]
    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    features: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: String,
        default: formatDate(new Date())
    }
})

module.exports = model('Hotel', HotelSchema);

