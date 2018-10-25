var AWS = require("aws-sdk");
var fs = require('fs');
var DynamoService = {}

AWS.config.update({
        region: "eu-west-1",
        endpoint: "http://localhost:8000"
});
var docClient = new AWS.DynamoDB.DocumentClient();

DynamoService.createEntry = function(params){
    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add user", ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded:");
        }
    })
}


module.exports = DynamoService
