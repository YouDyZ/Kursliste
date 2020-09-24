const { ipcMain } = require('electron');
const { Course, Leaders, Members, Users } = require('./modules/exports');

ipcMain.on('database:courses:create', (event, date, name, hr, min, leader) => {
    console.log(date);
    Course.create({
        name: name,
        date: date,
        timeHr: hr,
        timeMin: min,
        leader: leader,
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err.message);
        });
});

ipcMain.on('database:courses:addWaitingList', (event, name, course) => {});
