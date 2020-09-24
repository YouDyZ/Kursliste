const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Name des Kursleiter fehlt!"],
        unique: [true, "Der Kursleiter ist Bereits vorhanden. Bitte verusche es mit Vorname und dem ersten Buchstaben des Nachname"]
    },
    coursed: {
        type: [String],
        default: [],
    }
})