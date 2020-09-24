const { ipcRenderer } = require('electron');

function emitAddUser() {
    let name = 'test';
    let date = new Date(Date.now);

    console.log(JSON.stringify(date.toISOString));
    //ipcRenderer.send('database:courses:create', (name, date, leader));
}
