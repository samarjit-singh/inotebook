// file for connecting to database
const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/inotebook";

const dotenv = require("dotenv");

dotenv.config();

// function to connect to mongo
const connectToMongo = () => {
  mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
