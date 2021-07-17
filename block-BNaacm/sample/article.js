var mongoose = require('mongoose');
var schema = mongoose.schema;




var articleSchema = new schema({
    email : {type : String , lowercase :  true},
    age : {type :Number , default : 0}
},{timestamps : true});


var Article = mongoose.model('Article',articleSchema);

module.exports = Article;