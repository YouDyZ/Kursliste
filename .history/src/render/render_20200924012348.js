const { ipcRenderer } = require('electron');

function emitAddUser() {
    let name = 'test';
    let date = new Date(Date.now);
    date = date.toISOString;
    let leader = 'ich';

    //console.log();
    ipcRenderer.send('database:courses:create', name, date, leader);
}
