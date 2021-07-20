var mongoose = require('mongoose');
var express =require('express');
var morgan = require('morgan');
var User = require('./model/article');


mongoose.connect("mongodb://localhost/sample" ,{useNewUrlParser : true}, (err)=>{
    console.log(err ? err : "connet to database");
});

var app = express();

app.use(morgan('dev'));

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Welcome');
    console.log('Welcome');
})

app.post('/users',(req,res)=>{
    console.log(req.body);
    User.create(req.body ,(err,user)=>{
        console.log(err);
        res.json(user);
        console.log(user);
    })
});




app.listen(4000 , ()=>{
    console.log('server open');
})