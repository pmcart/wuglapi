var express = require('express');
var router = express.Router();
var locationObject = require('../models/location.js');
var dynamoService = require('../db/dynamoService.js')
var uuidv4 = require('uuid/v4');


router.get('/cities', function(req, res, next) {
    locationObject.scan().exec((err, data) => {
        if(err) {
            res.send(err)
            //return console.log(err); 
        }
        
        if(data){
            res.json(data)
        }
        else{
            res.json(404, 'Error')
        }
       
        });
})


module.exports = router;