var express = require('express');
var router = express.Router();
var businessObject = require('../models/business.js');
var dynamoService = require('../db/dynamoService.js')
var uuidv4 = require('uuid/v4');


router.get('/', function(req, res, next) {
    var locationId = req.query.locationid
    // var filter = {
    //     FilterExpression: 'locationid = :lid',
    //     ExpressionAttributeValues: {
    //       ':lid': locationId
    //     }
    //   };

    if(locationId){
        businessObject.scan('locationid').eq("1").exec()
        .then(function(businessObjects) {
          res.json(businessObjects)
        })
        .catch(function(err) {
          console.error(err);
        });
    }
    else{
        businessObject.scan().exec((err, data) => {
            if(err) {
                res.send(err)
            }
            
            if(data){
                res.json(data)
            }
            else{
                res.json(404, 'Error')
            }
           
            });
    }

})


router.get('/', function(req, res, next) {
  
  
})


module.exports = router;