var AWS = require("aws-sdk");
var fs = require('fs');
var DynamoService = {}

AWS.config.update({
        region: "eu-west-1",
        endpoint: "http://localhost:8080"
});
var docClient = new AWS.DynamoDB.DocumentClient();

DynamoService.createEntry = function(req) {
    console.log('Create Entry')
    return new Promise((resolve, reject) => {
        var params = {
            TableName: "Users",
            Item: {
                "id": req.data.id
            }
        }
        docClient.put(params, function(err, data) {
            if (err) {
                reject("Unable to add user", ". Error JSON:", JSON.stringify(err, null, 2));
            } else {
                resolve("PutItem succeeded:")
            }
        })
      })
}
  
module.exports = DynamoService
