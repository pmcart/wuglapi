var express = require('express');
var router = express.Router();
var mongoose = require('mongoose').set('debug', true);
var userObject = require('../models/user.js');
var dynamoService = require('../db/dynamoService.js')
const uuidv4 = require('uuid/v4');

var generateParams = function(req)
{
    console.log(req.body)
    return new Promise(
        function (resolve, reject) {
            var params = {
                TableName: 'Users',
                Item: {
                    "userid": req.body.userSub,
                    "username": req.body.user.username
                }
            }
            resolve(params)
        }
    )
}

router.post('/create', function(req, res, next) {
    console.log('Calling user/create')

    generateParams(req).then( (params) => {
        dynamoService.createEntry(params).then((message) =>
        res.send(message)
        ).catch((error) => {
            console.log('Did not work', error)
        });
    })
    
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