const courses = require('./courses.json');
const { ipcMain } = require('electron');
const mongoose = require('mongoose');
const { Course, Leaders } = require('../database/mongo/modules/exports');

ipcMain.on('pregenerate:check', () => {
    //TODO 4 Wochen vorgenerieren lassen.
});
