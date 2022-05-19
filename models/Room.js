const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { formatDate } = require('../utils/utils');

const RoomSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        maxPeople: {
            type: Number,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
        created: {
            type: String,
            default: formatDate(new Date())
        },
        updated: {
            type: String,
            default: formatDate(new Date())
        }
    },
    { timestamps: false }
);

module.exports = model('Room', RoomSchema);