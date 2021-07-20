var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title:String,
    description : String,
    tags:String,
    likes:String,
    author:Schema.Types.ObjectId    
},{timestamps : true});

var commentSchema = new Schema({
    content:String,
    author:articleSchema.author,
    article:articleSchema.title
},{timestamps:true});

var userSchema = new Schema({
    name:String,
    email:String,
    age:{type:Number , default : 0}
},{timestamps:true});

var User = mongoose.model('User',userSchema);

module.exports = User;

var Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;

var Article = mongoose.model('Article',articleSchema);

module.exports = Article;


