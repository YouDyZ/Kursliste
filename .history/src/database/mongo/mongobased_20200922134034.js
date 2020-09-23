const mongoose = require("mongoose");
const config = require("dotenv").config()

if(config.error) {
    throw config.error
}

console.log(config)