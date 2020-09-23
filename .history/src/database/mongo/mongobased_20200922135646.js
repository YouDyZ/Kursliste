const mongoose = require("mongoose");
const dotenv = require("dotenv").config()

if(dotenv.error) {
    throw dotenv.error
} 

const config = dotenv.parsed

mongoose.connect(
    `${config.DB_STRING}${config.DB_NAME}`,
    {
        useNewUrlParser: true,
        useFindAndModify: true,
        newCreateIndex: true,

    }
).then