var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    id: String,
    imgURL: String,
    userName: String,
    gender: String,
    lastTagDate: String,
    citySelected: String,
    regionSelected: String,
    countrySelected: String
}, { collection: 'UserObject' });
UserSchema.index({ pkey: 1 }, { unique: true });
module.exports = mongoose.model('UserObject', UserSchema, 'UserObject');