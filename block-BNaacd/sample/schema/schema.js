var mongoose = require('mongoose');
var schema = mongoose.schema;

var userschema = new schema({
    name : String,
    email:String,
    age : Number 
},{timestamps : true});


var newschema = new schema({
    email : {type : String , lowercase :  true},
    age : {type :Number , default : 0}
})
