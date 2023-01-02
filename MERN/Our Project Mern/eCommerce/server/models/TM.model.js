const mongoose = require("mongoose");
const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [
        true,
        "name is required"
      ],
      minlength: [2, "name must be at least 2 char."]
    },
    position: { type: String },
    status: { game1: Number, game2: Number, game3: Number },
  },
  { timestamps: true }
);
module.exports.Teams = mongoose.model("Teams", TeamSchema);

