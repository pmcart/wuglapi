var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var cityObject = require('../models/city.js');

/* GET ALL */
router.get('/', function(req, res, next) {
    cityObject.find(function(err, cities) {
        //if (err) return next(err);
        res.json(cities);
        //res.status(200).send("OK");
    });
});

/* GET SINGLE BY ID */
router.get('/:id', function(req, res, next) {
    cityObject.findById(req.params.id, function(err, city) {
        //if (err) return next(err);
        res.json(city);
    });
});


module.exports = router;