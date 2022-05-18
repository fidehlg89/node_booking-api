const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { formatDate } = require('../utils/utils');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        country: {
            type: String,
            required: true,
        },
        img: {
            type: String,
        },
        city: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        created: {
            type: String,
            default: formatDate(new Date())
        },
        updated:{
            type:String,
            default: formatDate(new Date())
        }
    },
    { timestamps: false }
)

module.exports = model('User', UserSchema);

