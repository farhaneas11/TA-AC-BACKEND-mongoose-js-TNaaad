var mongoose = require('mongoose');
var schema = mongoose.schema;

var userschema = new Schema({
    village : String ,
    city : String ,
    state : String,
    pin : Number,
    user : schema.Types.ObjectId;
},{timestamps : true});


var newschema = new schema({
    email : {type : String , lowercase :  true},
    age : {type :Number , default : 0}
})
