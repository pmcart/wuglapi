var express = require('express');
var router = express.Router();
var userObject = require('../models/user.js');
var dynamoService = require('../db/dynamoService.js')
var uuidv4 = require('uuid/v4');

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

router.post('/update/location', function(req, res, next) {
    console.log('Calling user/update ****')
    console.log('Updating user ****')
    userObject.update( req.data.userid, { regionselected: req.data.regionselected, countryselected: req.data.countryselected})
});

router.get('/:username', function(req, res, next) {
    
      userObject.query("username").eq(req.params.username).exec((err, data) => {
        if(err) {
            res.send('User does not exist')
            return console.log(err); 
        }
        
        if(data.count > 0){
            res.json(200, 'Success')
        }
        else{
            res.json(404, 'Error')
        }
       
        });
});


module.exports = router;