const { ipcRenderer } = require('electron');

function emitAddUser() {
    let name = 'test';
    let date = new Date(Date.now);
    date = date.toISOString();

    console.log(date);
    //ipcRenderer.send('database:courses:create', (name, date, leader));
}
