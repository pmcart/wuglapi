var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Test = require('../models/test.js');

/* GET ALL */
router.get('/', function(req, res, next) {
    Test.find(function(err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE BY ID */
router.get('/:id', function(req, res, next) {
    Test.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


/* SAVE BOOK */
router.post('/', function(req, res, next) {
    Test.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE */
router.put('/:id', function(req, res, next) {
    Test.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE */
router.delete('/:id', function(req, res, next) {
    Test.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;