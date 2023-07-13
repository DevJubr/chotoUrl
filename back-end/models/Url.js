const { Schema, model } = require("mongoose");
const urlSchema = new Schema(
  {
    longUrl: {
      required: true,
      type: String,
    },
    shortUrl: {
      required: true,
      type: String,
      unique: true,
    },
    history: [
      {
        createdTime: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);
const model = model("Urls", urlSchema);
module.exports = model;
