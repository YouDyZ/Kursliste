const { ipcRenderer } = require('electron');

function emitAddUser() {
    let name = 'test';
    let date = new Date();
    console.log(date);
    let hr = date.getHours();
    let min = date.getMinutes();
    date = `${date.getDay}. ${date.getMonth}. ${date.getFullYear()}`;

    //date.toISOString;
    let leader = 'ich';

    //console.log();
    ipcRenderer.send('database:courses:create', name, date, hr, min, leader);
}
