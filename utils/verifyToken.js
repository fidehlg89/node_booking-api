const jwt = require('jsonwebtoken')
const { createError } = require('../errors/handleError')

const verify = {
    token: (req, res, next) => {
        const accessToken = req.cookies.access_token;
        if(!accessToken){
            return next(createError(401, "You are not authenticated!"));
        }

        jwt.verify(accessToken, process.env.JWT_SEC, (err, user)=>{
            if(err) return next(createError(403, "Token is not valid!"))
            req.user = user;
            next();
        })
    },

    user: (req, res, next) => {
        verify.token(req, res, next, () =>{
            if(req.user.id === req.params.id || req.user.isAdmin){
                next();
            }else{
                return next(createError(403, "You are not authenticated!"))
            }
        })
    },

    admin: (req, res, next) =>{
        verify.token(req, res, next, () =>{
            if(req.user.isAdmin){
                next();
            }else{
                return next(createError(403, "You are not authorized!"))
            }
        })
    }
}

module.exports = verify;