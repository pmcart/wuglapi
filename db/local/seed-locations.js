
var locationObject = require('../../models/location.js');

var uuidv4 = require('uuid/v4');
var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
    region: "eu-west-1",
    endpoint: "http://localhost:8080"
});

var dynamoose = require('dynamoose')
dynamoose.AWS.config.update({
    accessKeyId: 'AKID',
    secretAccessKey: 'SECRET',
    region: 'eu-west-1'
});
dynamoose.local("http://localhost:8080")
var location = new locationObject({
    locationid: '1',
    name: 'Letterkenny',
    city: 'Letterkenny'
});
location.save().then(() => {
    res.send(200)
}).catch(err => {
    res.send(err)
})



//module.exports = seed-locations;