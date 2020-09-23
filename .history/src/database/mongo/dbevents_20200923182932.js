const {ipcMain} = require("electron")
const {Course, Leaders,Members, Users} = require("./modules/exports")

ipcMain.on("database:courses:add", (name, date, leader) => {
    Course.create({name: name, date: date, leader: leader,})
})