var express = require('express');
var router = express.Router();
var mongoose = require('mongoose').set('debug', true);
var userObject = require('../models/user.js');

/* GET ALL */
router.get('/', function(req, res, next) {

    var userID = req.query.userID;
    if (userID) {
        userObject.find({ id: userID }, function(err, users) {
            if (err) return next(err);
            if (users.length)
                res.json('true');
            else
                res.json('false');
            //res.status(200).send("OK");
        });
    } else {
        userObject.find(function(err, users) {
            //if (err) return next(err);
            res.json(users);
            //res.status(200).send("OK");
        });
    }

});

/* GET SINGLE BY ID */
router.get('/:id', function(req, res, next) {
    userObject.findById(req.params.id, function(err, user) {
        //if (err) return next(err);
        res.json(user);
    });
});


router.post('/create', function(req, res, next) {
    userObject.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
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