var dynamoose = require('dynamoose');
var Schema = dynamoose.Schema;
var uuidv4 = require('uuid/v4');

var userSchema = new Schema({
    userid: {
        type: String,
        default: uuidv4(),
        //validate: function(v) { return v > 0; },
        hashKey: true
    },
    username: {
        type: String,
        index: { global: true }
        //rangeKey: true,
        //index: true // name: nameLocalIndex, ProjectionType: ALL
    },
    imgurl: {
        type: String,
        default: 'null',
    },
    gender: {
        type: String,
        default: 'Male',
    },
    lasttagdate: {
        type: String,
        default: 'null',
    },
    cityselected: {
        type: String,
        default: 'null',
    },
    regionselected: {
        type: String,
        default: 'null',
    },
    countryselected: {
        type: String,
        default: 'null',
    },

});

var User = dynamoose.model('Users', userSchema, {update: true})
module.exports = User;