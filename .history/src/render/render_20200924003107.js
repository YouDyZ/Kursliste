const { ipcRenderer } = require('electron');

function emitAddUser() {
    let name = 'test';
    let date = new Date(Date.now);

    console.log(date.toISOString);
    //ipcRenderer.send('database:courses:create', (name, date, leader));
}
