const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let movieSchema = new Schema(
  {
    name: {
      type: String,
    },
    year: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    video: {
      type: String,
    },
  },
  {
    collection: "movies",
  }
);

module.exports = mongoose.model("Movie", movieSchema);
