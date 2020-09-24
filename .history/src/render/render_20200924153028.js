const { ipcRenderer } = require('electron');

function getDayName(date) {
    const weekdays = [
        'Sonntag',
        'Montag',
        'Dienstag',
        'Mittwoch',
        'Donnerstag',
        'Freitag',
        'Samstag',
    ];
    return weekdays[date.getDay()];
}

function emitAddUser() {
    let name = 'test';
    let date = new Date();
    console.log(getDayName(date));
    let hr = date.getHours();
    let min = date.getMinutes();
    date = `${date.getDay()}. ${date.getMonth()}. ${date.getFullYear()}`;

    //date.toISOString;
    let leader = 'ich';

    //console.log();
    ipcRenderer.send('database:courses:create', name, date, hr, min, leader);
}

ipcRenderer.on('database:course:error:addLeader', (event, data) => {
    console.log(data);
});

ipcRenderer.on('database:course:added:Leader', (event, leader) => {
    console.log('leader: ' + leader);
});
