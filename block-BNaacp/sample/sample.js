var mongoose = require('mongoose');
var express =require('express');
var morgan = require('morgan');
var User = require('./model/app');


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

app.get('/users' ,(req,res)=>{
    console.log(req.body);
    User.find({},(err,user)=>{
        console.log(err);
        res.json(user);
    })
});

app.get('/users/:id' ,(req,res)=>{
    var id = req.params.id;
    console.log(req.body);
    User.findById(id,(err,user)=>{
        console.log(err);
        res.json(user);
    })
});

app.get('/users/' ,(req,res)=>{
    var id = req.params.id;
    console.log(req.body);
    User.find({_id: "60f69e14f199671fd898e0fa"},(err,user)=>{
        console.log(err);
        res.json(user);
    })
})

app.get('/users//' ,(req,res)=>{
    var id = req.params.id;
    console.log(req.body);
    User.findOne({_id: "60f69e14f199671fd898e0fa"},(err,user)=>{
        console.log(err);
        res.json(user);
    })
})

app.put('/users/:id' ,(req,res)=>{
    var id = req.params.id;
    console.log(req.body);
    User.findByIdAndUpdate(id,req.body,{new:true},(err,updateuser)=>{
        console.log(err);
        res.json(updateuser);
    })
});

app.put('/users/' ,(req,res)=>{
    
    console.log(req.body);
    User.update({_id: "60f69e14f199671fd898e0fa"},(err,updateuser)=>{
        console.log(err);
        res.json(updateuser);
    })
})

app.put('/users//' ,(req,res)=>{
    
    console.log(req.body);
    User.updateOne({_id: "60f69e14f199671fd898e0fa"},(err,updateuser)=>{
        console.log(err);
        res.json(updateuser);
    })
})

app.delete('/users/:id' ,(req,res)=>{
    var id = req.params.id;
    console.log(req.body);
    User.findByIdAndDelete(id,(err,delteuser)=>{
        res.send(`${delteuser.id} was deleted`);
        
    })
});


app.listen(4000 , ()=>{
    console.log('server open');
})