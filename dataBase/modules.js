const mongoose = require('mongoose')

var registerSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password:String,
    gender : String,
    status : String,
    admin: Boolean
});

var loginUserSchema = new mongoose.Schema({
    uname: {type:String, unique:true},
    password:String
});

var Userdb = mongoose.model('User', loginUserSchema, 'userdb');
var login = mongoose.model('Registered', registerSchema, 'userdb');

module.exports = Userdb;