const mongoose = require('mongoose')

const Schema = mongoose.Schema;


// Creat Geo Location Schema 

const GeoLocationSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

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
        default: false
    },
    geometry: {
        geometry: {type: {
            type: String,
            default: "Point"
        },
        coordinates: {
            type: [Number],
            index: "2dsphere"
        }}
    }

}) 

const Driver = mongoose.model('Driver', DriverSchema)

module.exports = Driver;