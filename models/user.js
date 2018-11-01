var dynamoose = require('dynamoose');

var User = dynamoose.model('Users', {
    userid: String,
    imgurl: String,
    username: String,
    gender: String,
    lasttagdate: String,
    cityselected: String,
    regionselected: String,
    countryselected: String
});
module.exports = User