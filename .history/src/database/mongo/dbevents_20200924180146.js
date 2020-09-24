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
                            event.reply(
                                'database:course:created:leader',
                                obj.name
                            );
                            console.log('New Added: ' + obj.name);
                        });
                    } else {
                        Leaders.updateOne(
                            { _id: found._id },
                            { $push: { courses: res._id } }
                        )
                            .then((obj) => {
                                event.reply(
                                    'database:course:updated:leader',
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
/**
 *
 * @param {type: electronEmitter} event
 * @param {type: Document with: name, date, timeHr, timeMin} course
 */
function courseExist(event, course) {
    if (course.name == undefined ||
       course.date== undefined ||
        course.timeHr== undefined ||
        course.timeMin== undefined ||)
    Course.find({
        name: course.name,
        date: course.date,
        timeHr: course.timeHr,
        timeMin: course.timeMin,
    }).then((res) => {
        if (res.length != 0) {
            return false;
        } else {
            return true;
        }
    });
}

ipcMain.on('database:courses:addWaitingList', (event, courses, member) => {
    //TODO Check Teilnehmer < 18 -> Durchgang else
    if (member.number == undefined) {
        if (member.forname == undefined && member.lastname == undefined) {
            event.reply(
                'database:courses:addWaitingList:error',
                'expected Fields'
            );
        }
        Members.find({
            forname: member.forname,
            lastname: member.forname,
        }).then((res) => {
            console.log(res);
            if (res.length != 1) {
                event.reply(
                    'database:courses:addWaitingList:error',
                    'expected Number'
                );
            } else {
                member.number = res.number;
                if (courses.length == 0) {
                    event.reply(
                        'database:courses:ddWaitingList:error',
                        'expected Courses'
                    );
                } else {
                    courses.forEach((course) => courseExist(event, course));
                }
            }
        });
    }
});
