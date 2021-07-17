var mongoose = require('mongoose');
var schema = mongoose.schema;

var userschema = new Schema({
    password : {type : String,minlength : 5 , maxlength : 15},
    createdAt : { type :Date , default : Date.now}
},{timestamps : true});


var newschema = new schema({
    email : {type : String , lowercase :  true},
    age : {type :Number , default : 0}
},{timestamps : true})