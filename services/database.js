const mongoose = require("mongoose");
const keys = require("../config/keys");

const connectDB = async () => {
  await mongoose.connect(keys.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Mongodb is connected ...!!!!");
};

module.exports = connectDB;
