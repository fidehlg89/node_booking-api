const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const dev_db_url = process.env.MONGO_URL;

mongoose
  .connect(dev_db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    if (db.connection.host == "localhost")
      console.log("Database is connect local");
    else console.log("Database is connect on cloud");
  })
  .catch((err) => {
    console.log("ERROR::::::[ ", err);
    throw err;
  });

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});
