var mongoose = require('mongoose');
var schema = mongoose.schema;

var adressSchema = new Schema({
    village : String,
    city : String ,
    state : String ,
    pin : Number ,
    user : schema.Types.ObjectId
},{timestamps : true});

addressSchema.update({state : String , $set : {required : true}})
addressSchema.update({city : String , $set : {required : true}})

var Adress = mongoose.model('Adress' , adressSchema);

module.exports = Adress;