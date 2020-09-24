const { ipcMain } = require('electron');
const { Course, Leaders, Members, Users } = require('./modules/exports');

ipcMain.on('database:courses:create', (event, name, date, leader) => {
    console.log(event);
    Course.create({ name: name, date: date, leader: leader })
        .then((date) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err.message);
        });
});

ipcMain.on('database:courses:addWaitingList', (event, name, course) => {});
