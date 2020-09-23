const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    forname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    coursed: {
        type: [String],
        required: true,
        default: [],
    },
    expiredCourses: {
        type:[String],
        required: true,
        default: [],
    }
})