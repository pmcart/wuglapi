var dynamoose = require('dynamoose');
var Schema = dynamoose.Schema;
var uuidv4 = require('uuid/v4');

var businessSchema = new Schema({
    businessid: {
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
    locationid: {
        type: String,
        default: 'null'
    }

});

var Business = dynamoose.model('Business', businessSchema, {update: true})
module.exports = Business;