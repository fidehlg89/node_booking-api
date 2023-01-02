const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { createError } = require('../errors/handleError')
const jwt = require('jsonwebtoken')
const { response } = require("../utils/utils");


const authController = {};

authController.register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            ...req.body,
            password: hash
        })

        await newUser.save()
        res.status(200).json(response("create"))
    } catch (error) {
        next(error);
    }
}

authController.login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) return next(createError(404, "User not found"))

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        )

        if (!isPasswordCorrect) return next(createError(404, "Wrong password or email!"))

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT_SEC
        )

        const { password, isAdmin, ...otherDetails } = user._doc

        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({ details: { ...otherDetails }, isAdmin })
    } catch (error) {
        next(error);
    }
}

module.exports = authController;