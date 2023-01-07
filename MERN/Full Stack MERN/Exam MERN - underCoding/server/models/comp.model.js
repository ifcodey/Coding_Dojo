const mongoose = require("mongoose");
const CompetitionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "question is required"],
      minlength: [10, "name must be at least 10 char."],
    },

    country1: {
      type: String,
      // counter: { type: Number, default: 0},
      required: [true, "country1 is required"],
      minlength: [2, "country1 must be at least 2 char."],
    },

    country2: {
      type: String,
      // counter: { type: Number, default: 0},
      required: [true, "country2 is required"],
      minlength: [2, "country2 must be at least 2 char."],
    },
    country3: {
      type: String,
      // counter: { type: Number, default: 0},
      required: [false, "country is not required"],
    },
    // country: { country1: String, country2: String, country3: String },
    //-------------- counter --------------

    counter1: {
      type: Number,
      default: 0,
    },
    counter2: {
      type: Number,
      default: 0,
    },
    counter3: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
module.exports.Competition = mongoose.model("Competition", CompetitionSchema);
