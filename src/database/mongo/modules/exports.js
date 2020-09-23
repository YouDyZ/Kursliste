const mongoose = require("mongoose")

//import all modules

const CourseSchema = require("./schema/Courses");
const MembersSchema = require("./schema/Members");
const UsersSchema = require("./schema/Users");
const LeadersSchema = require("./schema/Leaders");

const Course = mongoose.model("course", CourseSchema)
const Members = mongoose.model("member", MembersSchema)
const Users = mongoose.model("user", UsersSchema)
const Leaders = mongoose.model("leader", LeadersSchema)

module.exports = {
    Course,
    Members,
    Users,
    Leaders
}