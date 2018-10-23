var express = require('express');
var router = express.Router();
var mongoose = require('mongoose').set('debug', true);
var tagObject = require('../models/tag.js');

/* GET ALL */
router.get('/', function(req, res, next) {
    var regionId = req.query.regionID;
    if (regionId) {
        tagObject.find({ regionID: regionId }, function(err, tags) {
            //if (err) return next(err);
            res.json(tags);
            //res.status(200).send("OK");
        });
    } else {
        tagObject.find(function(err, tags) {
            //if (err) return next(err);
            res.json(tags);
            //res.status(200).send("OK");
        });
    }
});

/* GET SINGLE BY ID */
router.get('/:id', function(req, res, next) {
    tagObject.findById(req.params.id, function(err, tag) {
        //if (err) return next(err);
        res.json(tag);
    });


});


router.post('/', function(req, res, next) {
    tagObject.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


module.exports = router;