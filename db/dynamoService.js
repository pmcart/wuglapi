var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
        region: "eu-west-1",
        endpoint: "http://localhost:8000"
    });
var docClient = new AWS.DynamoDB.DocumentClient();

class DynamoService {  
    
    // constructor() {
        
    // }

    createEntry() {
        docClient.put(params, function(err, data) {
            if (err) {
                console.error("Unable to add Car", car.name, ". Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("PutItem succeeded:", car.name);
            }
        });
    }
}

module.exports = DynamoService
