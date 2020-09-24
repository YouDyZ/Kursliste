const { ipcRenderer } = require('electron');

function emitAddUser() {
    let name = 'test';
    let date = Date.now().toISOString;

    console.log(date);
    //ipcRenderer.send('database:courses:create', (name, date, leader));
}
