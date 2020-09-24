const { ipcRenderer } = require('electron');

function emitAddUser() {
    let name = 'test';
    let date = new Date('09, 24, 20 11:11');
    console.log(date);
    let hr = date.getHours();
    let min = date.getMinutes();
    date = date.getFullYear();

    //date.toISOString;
    let leader = 'ich';

    //console.log();
    ipcRenderer.send('database:courses:create', name, date, hr, min, leader);
}
