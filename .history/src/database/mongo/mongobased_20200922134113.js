const mongoose = require("mongoose");
const dotenv = require("dotenv").config()

if(dotenv.error) {
    throw dotenv.error
} 

console.log(dotenv)