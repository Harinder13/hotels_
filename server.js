const express = require('express')
const app=express();
const db = require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json());

// const Person=require('./models/person1');
const menu=require('./models/menu');

app.get('/', function(req,res){
    res.send('yes,request is already has been sent with your drinks ')
})

//Import the router files

const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes');
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);


app.listen(4000,()=>{
    console.log('server is live');
    
})