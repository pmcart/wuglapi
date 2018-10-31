var express = require('express');
var router = express.Router();
var mongoose = require('mongoose').set('debug', true);
var userObject = require('../models/user.js');
var dynamoService = require('../db/dynamoService.js')



router.post('/create', function(req, res, next) {
    dynamoService.createEntry('Users', req.body).then((message) =>
        res.send(message)
    ).catch((error) => {
        console.log('Did not work', error)
    });
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