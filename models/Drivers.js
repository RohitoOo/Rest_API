const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const DriverSchema = new Schema({
    name : {
        type: String,
        required: [true, "Name Field Is Required"]
    },
    car : {
        type: String,
        required: [true, "Car Field Is Required"]
    },
    available : {
        type: Boolean,
        required: [true, "Availability Field Is Required"]
    }
    // Add Geo Location

}) 

const Driver = mongoose.model('Driver', DriverSchema)

module.exports = Driver;