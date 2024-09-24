const express=require('express');
const router= express.Router();
const Person=require('../models/person1');

router.get('/person',async(req,res)=>{
    try{
        const response=await Person.find();
        console.log('data saved');
    res.status(200).json(response);
 }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
    

 }
})
router.get('/person/:workType',async(req,res)=>{
    try{
        const workType=req.params.workType; //extrat the work type from URL Parameter
        if(workType=='chef' ||workType=='manager'||workType=='waiter'){
            const response= await Person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);
            

        }else{
            res.status(404).json({error:'Invalid work type'})
        }}
        catch(err){
            console.log(err);
            res.status(500).json({error:'Internal server error'})
            

        }
    })

    router.put('/:id',async(req,res)=>{
        try{
            const  personId=req.params.id  //extract the id from URL parameter
            const updatedPersonData=req.body; 

            const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
                new:true, //Return the updated documnet
                runValidators:true, //Run Mongoose validation
            })
            if(!response){
                return res.status(404).json({error:'Person not found'});
            }
            console.log('data updated');
            res.status(200).json(response);
            
        }catch(err){
            console.log(err);
            res.status(500).json({error:'internal Server Error'});
            


        }
    })
    module.exports=router;