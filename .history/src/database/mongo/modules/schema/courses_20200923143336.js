const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    members: {
        type:[String],
        required: true,
        default: [],
    },
    name: {
        type:String,
        required: [true, "Der Kurs benötigt einen Namen!"],
    },
    date: {
        type: Date,
        required: [true, "Das Datum für den Kurs fehlt!"],
    }, 
    leader: {
        type: String,
        required: [true, "Der Kursleitder fehlt!"]
    }
})