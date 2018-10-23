var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var locationObject = require('../models/location.js');

/* GET ALL */
router.get('/', function(req, res, next) {
    locationObject.find(function(err, locations) {
        //if (err) return next(err);
        res.json(locations);
        //res.status(200).send("OK");
    });
});

/* GET SINGLE BY ID */
router.get('/:id', function(req, res, next) {
    locationObject.findById(req.params.id, function(err, location) {
        //if (err) return next(err);
        res.json(location);
    });
});


module.exports = router;