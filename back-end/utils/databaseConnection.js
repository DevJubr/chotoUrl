const mongoose = require("mongoose");

module.exports = dbConnection = () => {
  try {
    mongoose.connect(
      "mongodb+srv://chotourl:chotourl@chotourl.mnlplau.mongodb.net/"
    );
  } catch (error) {
    console.log("mongo connection error:", error);
  }
};
