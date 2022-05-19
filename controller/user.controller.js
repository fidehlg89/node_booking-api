const User = require('../models/User')
const { formatDate, response } = require('../utils/utils')

const userController = {}

userController.updateUser = async(req, res, next) =>{
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {new:true}
        )
        const date = formatDate(new Date())
        updatedUser.updated = date
        res.status(200).json(updatedUser)
    } catch (error) {
        next(error)
    }
}

userController.deleteUser = async(req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json(response("delete"))
    } catch (error) {
        next(error)
    }
}

userController.getUser = async(req, res, next) =>{
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

userController.getUsers = async(req, res, next) =>{
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}

module.exports = userController