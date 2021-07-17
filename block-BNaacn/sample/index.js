var mongoose = require('mongoose');
var express =require('express');
var morgan = require('morgan');

mongoose.connect("mongodb://localhost/sample" ,{useNewUrlParser : true}, (err)=>{
    console.log(err ? err : "connet to database");
});

var app = express();

app.use(morgan('dev'));


app.listen(4000 , ()=>{
    console.log('server open');
})


/*

var mongoose = require('mongoose');
var schema = mongoose.schema;

var userschema = new Schema({
    village : String ,
    city : String ,
    state : String,
    pin : Number,
    user : schema.Types.ObjectId;
},{timestamps : true});



var articleSchema = new schema({
    email : {type : String , lowercase :  true},
    age : {type :Number , default : 0}
},{timestamps : true});


var Article = mongoose.model('Article',articleSchema);

module.exports = Article;



*/