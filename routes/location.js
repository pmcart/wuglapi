var express = require('express');
var router = express.Router();
var userObject = require('../models/location.js');
var dynamoService = require('../db/dynamoService.js')
var uuidv4 = require('uuid/v4');


router.get('/cities', function(req, res, next) {
   
});


module.exports = router;