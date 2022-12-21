const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Name must be require"],
            minlength: [3, "Name must be at least 3"],
        },
    },
    { timestamps: true }
)

module.exports.Author = mongoose.model("Author", AuthorSchema);