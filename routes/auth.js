const router = require("express").Router();

const {getUsers} = require('../controller/auth.controller');

router.get("/", getUsers)

module.exports = router;