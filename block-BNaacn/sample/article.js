var mongoose = require('mongoose');
var schema = mongoose.schema;

var articleSchema = new schema({
    title : String,
    descriptoin : String ,
    tags : String,
    createdAt :{type : Date , default : new Date()},
    likes : {type : Number , default : 0},
},{timestamps : true});


var Article = mongoose.model('Article',articleSchema);

module.exports = Article;
