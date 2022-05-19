const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const {handleErrorReport} = require('./errors/handleError');

dotenv.config();

//Database
require('./db/db');

//Importing routes
const auth = require('./routes/auth');
const hotels = require('./routes/hotels');
const rooms = require('./routes/rooms');
const user = require('./routes/users');

app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())

//Use routes
app.use("/api/auth", auth);
app.use("/api/hotels", hotels);
app.use("/api/rooms", rooms);
app.use("/api/users", user);

//Handle Error
app.use(handleErrorReport);

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), ()=>{
    console.log("Server on port: ", app.get('port'))
})