const { ipcMain } = require('electron');
const { Course, Leaders, Members, Users } = require('./modules/exports');
//name, date, hr, min, leader
ipcMain.on('database:courses:create', (event, name, date, hr, min, leader) => {
    console.log(date);
    Course.create({
        name: name,
        date: date,
        timeHr: hr,
        timeMin: min,
        leader: leader,
    })
        .then((res) => {
            console.log('res: ' + res);
            Leaders.findOne({ name: res.leader })
                .then((found) => {
                    if (!found) {
                        Leaders.create({
                            name: res.leader,
                            courses: [res._id],
                        }).then((obj) => {
                            console.log('New Added: ' + obj.name);
                        });
                    } else {
                        Leaders.updateOne(
                            { _id: found._id },
                            { $push: { courses: res._id } }
                        )
                            .then((obj) => {
                                event.reply(
                                    'database:course:added:Leader',
                                    res.leader
                                );
                            })
                            .catch((err) => {
                                event.reply(
                                    'database:course:error:addLeader',
                                    err.message
                                );
                            });
                    }
                })
                .catch((err) => {
                    event.reply(
                        'database:course:error:findLeader',
                        err.message
                    );
                });
        })
        .catch((err) => {
            console.log(err.message);
        });
});

ipcMain.on('database:courses:addWaitingList', (event, name, course) => {});
