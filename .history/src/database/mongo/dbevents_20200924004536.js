const { ipcMain } = require('electron');
const { Course, Leaders, Members, Users } = require('./modules/exports');

ipcMain.on('database:courses:create', (event, name, date, leader) => {
    Course.create({ name: name, date: date, leader: leader })
        .then(() => {
            console.log('Added to DB');
        })
        .catch((err) => {
            console.log(res.message);
        });
});

ipcMain.on('database:courses:addWaitingList', (event, name, course) => {});
