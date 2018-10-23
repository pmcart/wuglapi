var mongoose = require('mongoose');

var CitySchema = new mongoose.Schema({
    name: String,
    id: String,
    countryID: String,
}, { collection: 'CityObject' });

module.exports = mongoose.model('CityObject', CitySchema, 'CityObject');