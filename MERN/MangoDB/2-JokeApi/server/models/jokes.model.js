// mongoose library.
const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema(
  {
    // feilds and here used a vaildations like in coding dojo tab.
    setup: {
      type: String,
      required: [true, "Setup is required"],
      minlength: [10, "Setup must be at least 10 characters long"],
    },
    punchLine: {
      type: String,
      required: [true, "punchline is required"],
      minlength: [3, "punchline must be at least 3 characters long"],
    },
  },
  //    { timestamps: true } is a second arg object like createdAt and updatedAt in java.
  { timestamps: true }
);
// schema table called.
const Joke = mongoose.model("Joke", JokesSchema);

// To export model to controller.
module.exports = Joke;

// ------------------------------------------------------
// validation -> model , controller , react.
// ------------------------------------------------------

// {
// first_name: {
// 	type: String,
// 	required: [true, "First name is required"],
// 	minlength: [6, "First name must be at least 6 characters long"]
//   },
//   last_name: {
// 	type: String,
// 	required: [true, "Last name is required"],
// 	maxlength: [20, "Last name must be at least 6 characters long"]
//   },
//   age: {
// 	type: Number,
// 	min: [1, "You must be at least 1 or older to register"],
// 	max: [150, "You must be at most 149 years old to register"]
//   },
//   email: { type: String, required: [true, "Email is required"] }
// },
// { timestamps: true }
// );
// }
