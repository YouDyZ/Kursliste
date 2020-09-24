const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    members: {
        type: [String],
        required: true,
        default: [],
    },
    name: {
        type: String,
        required: [true, 'Der Kurs benötigt einen Namen!'],
    },
    date: {
        type: Date,
        required: [true, 'Das Datum für den Kurs fehlt!'],
    },
    timeHr: {
        type: Number,
        required: [true, "Du benötigst eine Startzeit in Stunden"],
        min: 0,
        max: 23
    },
    timeMin: {
        type: Number,
        required: [true, "Du benötigst eine Startzeit in Minuten"],
        min: 0,
        max: 59,
    }
    leader: {
        type: String,
        required: [true, 'Der Kursleitder fehlt!'],
    },
    waitingList: {
        type: [String],
        required: true,
        default: [],
    },
    checkedIn: {
        type: [String],
        required: true,
        default: [],
    },
});
