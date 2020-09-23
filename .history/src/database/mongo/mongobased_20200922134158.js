const mongoose = require("mongoose");
const dotenv = require("dotenv").config()

if(dotenv.error) {
    throw dotenv.error
} 

const config = dotenv.parsed

console.log(config)