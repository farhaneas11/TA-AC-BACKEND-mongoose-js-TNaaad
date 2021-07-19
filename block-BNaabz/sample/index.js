var mongoose = require('mongoose');
var express =require('express');
var morgan = require('morgan');

mongoose.connect("mongodb://localhost/sample" ,{useNewUrlParser : true}, (err)=>{
    console.log(err ? err : "connet to database");
});

var app = express();

app.use(morgan('dev'));


app.listen(4000 , ()=>{
    console.log('server opne');
})
