const mongoose=require('mongoose');

// define the MongoDB connection URL
const mongoURL='mongodb://localhost:27017/hotels'  //Replace 'mydatabase'with your database name

//set up MongoDB connection

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// get the default connection
// Mangoose maintain a connection object representing the MangoDB connection

const db=mongoose.connection;

// default event listeners for database connection

db.on('connected',()=>{
    console.log('connected to MongoDB server');
    
});
db.on('error',(err)=>{
    console.error('MongoDB connection error:',err);
    
});
db.on('disconnected',()=>{
    console.log('Mongodb disconnected');
    
});
// export the database connection
module.exports=db;