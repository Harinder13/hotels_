const express=require('express')
const router=express.Router();
const Menu=require('./models/menu');


router.get('/menu',async(req,res)=>{
    try{
        const data=await Menu.find();
        console.log('data fetched');
        res.status(200).json(data);
}catch(err){
    console.log(err);
    res.status(500).json({error:'Internal error'})
    
}
})
//export module
module.exports=router;
