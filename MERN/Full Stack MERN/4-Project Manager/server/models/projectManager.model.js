const mongoose = require('mongoose');
const Projects = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minlength: [2, "name must be at least 2 char."]

    },
    date: {
        type: Date,
        required: [
            true,
            "Date is required"
        ],
    },
    status:
    {
        statusNum : Number,
    }


}, { timestamps: true });
module.exports.Projects = mongoose.model('Projects', Projects);