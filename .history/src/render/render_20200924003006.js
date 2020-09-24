const { ipcRenderer } = require('electron');

function emitAddUser() {
    let name = 'test';
    let date = new Date(Date.now).toISOString;

    console.log(JSON.stringify(date));
    //ipcRenderer.send('database:courses:create', (name, date, leader));
}
