// file for connecting to database
const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/inotebook";

// function to connect to mongo
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
