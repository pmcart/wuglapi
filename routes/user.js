var express = require('express');
var router = express.Router();
var userObject = require('../models/user.js');
var dynamoService = require('../db/dynamoService.js')
var uuidv4 = require('uuid/v4');

var createUser = function(req) {
    return new Promise((resolve, reject) => {

        var user = new userObject({
            userid: req.body.userSub ? req.body.userSub : uuidv4(),
            username: req.body.user.username
        });
        resolve(user); // fulfilled

    });
}

router.post('/create', function(req, res, next) {
    console.log('Calling user/create ****')
    console.log('Creating user ****')
    var user = new userObject({
        userid: req.body.userSub,
        username: req.body.user.username
    });
    user.save().then(() => {
        res.send(200)
    }).catch(err => {
        res.send(err)
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