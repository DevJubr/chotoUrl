const mongoose = require("mongoose");

module.exports = dbConnection = () => {
  try {
    mongoose.connect("mongodb+srv://dar:dar@cluster1.a56rvau.mongodb.net/");
  } catch (error) {
    console.log("mongo connection error:", error);
  }
};
