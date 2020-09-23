const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Name des Kursleiter fehlt!"]
    },
    coursed: {
        type: [String],
        default: [],
    }
})