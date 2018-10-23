var mongoose = require('mongoose');

var LocationSchema = new mongoose.Schema({
    name: String,
    id: String,
    city: String,
    long: String,
    lat: String,
    countryID: String,
    regionID: String
}, { collection: 'LocationObject' });

module.exports = mongoose.model('LocationObject', LocationSchema, 'LocationObject');