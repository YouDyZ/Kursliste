const courses = require('./courses.json');
const { ipcMain } = require('electron');
const mongoose = require('mongoose');
const { Course, Leaders } = require('../database/mongo/modules/exports');
