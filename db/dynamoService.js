var AWS = require("aws-sdk");
var fs = require('fs');
var DynamoService = {}
const uuidv4 = require('uuid/v4');


AWS.config.update({
    region: "eu-west-1",
    endpoint: "http://localhost:8080"
});
var docClient = new AWS.DynamoDB.DocumentClient();

DynamoService.createEntry = function(tableName, body) {
    console.log('In Create Entry')
    console.log(body.user.username)
    var params = {
        TableName: tableName,
        Item: {
            "userid": uuidv4(),
            "username": body.user.username
        }
    }
    return new Promise((resolve, reject) => {
        console.log('Returning Promise')
        docClient.put(params, function(err, data) {
            if (err) {
                console.log(err)
                reject("Unable to add user", ". Error JSON:", JSON.stringify(err, null, 2));
            } else {
                resolve("PutItem succeeded:", data)
            }
        })
    })
}

module.exports = DynamoService