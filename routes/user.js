var express = require('express');
var router = express.Router();
var mongoose = require('mongoose').set('debug', true);
var userObject = require('../models/user.js');
var dynamoService = require('../db/dynamoService.js')



router.post('/create', function(req, res, next) {
    console.log('users/create')
    
    console.log('Calling createEntry')
    dynamoService.createEntry(req).then( () =>
        res.json('')
    )
   
});

router.post('/setlocation', function(req, res, next) {
    userObject.update({ id: req.body.id }, { $set: { citySelected: req.body.citySelected } }, function(err, user) {
        if (err) throw error
        console.log(user);
        console.log("update user complete")
        res.json(user);
    })
});


module.exports = router;