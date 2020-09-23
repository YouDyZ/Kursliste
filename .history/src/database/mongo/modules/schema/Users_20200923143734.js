const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, "Der username ist bereits in Benutzung!"]
    },
    password: {
        type: String,
        required: [true, "Du benötigst ein Passwort!"],
    },
    salt: {
        type: String,
        required: true,
    },rank: {
        type: Number,
        required: true,
        default: 0
    }
})