const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, "Der nutzername ist bereits in Benutzung!"]
    },
    password: {
        type: String,
        required: [true, "Du benötigst ein Passwort!"],
    },
    salt: {
        type: String,
        required: true,
    }
})