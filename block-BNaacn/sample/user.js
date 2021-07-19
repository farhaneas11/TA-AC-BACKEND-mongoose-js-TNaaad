var mongoose = require('mongoose');
var schema = mongoose.schema;


var userSchema = new Schema({
    name : String ,
    email : {type : String , lowercase : true} ,
    age : {type : Number , default : 0}
},{timestamps : true});


userSchema.insert({password:{type:String , minlength :5},
    createdAt :{type:Date , default : new Date()}});

userSchema.insert({favorites : ['food','gaming']});

module.exports = mongoose.model('User' , userSchema);
