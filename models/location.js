var dynamoose = require('dynamoose');
var Schema = dynamoose.Schema;
var uuidv4 = require('uuid/v4');

var locationSchema = new Schema({
    locationid: {
        type: String,
        default: uuidv4(),
        //validate: function(v) { return v > 0; },
        hashKey: true
    },
    name: {
        type: String,
        index: { global: true }
        //rangeKey: true,
        //index: true // name: nameLocalIndex, ProjectionType: ALL
    },
    city: {
        type: String,
        default: 'null',
    },
    long: {
        type: String,
        default: 'Male',
    },
    lat: {
        type: String,
        default: 'null',
    },
    countryid: {
        type: String,
        default: 'null',
    },
    regionid: {
        type: String,
        default: 'null',
    }

});

var Location = dynamoose.model('Locations', locationSchema, {update: true})
module.exports = Location;