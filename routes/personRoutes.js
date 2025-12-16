import express from "express";
import Person from "../models/person.js";

const router = express.Router();


router.get('/', async(req,res)=>{
    try {
        
        const response = await Person.find();
        res.status(200).json({
            success:true,
            msg:'data fetched successfully',
            data:response
        })
    } catch (error) {
        res.status(500).json({err:error})
    }
} )


router.post("/", async (req, res) => {
  try {
    const data = req.body;
    //create a new person model using a mongoose model
    const newPerson = new Person(data);
    //save the new person to database
    const response = await newPerson.save();
    console.log(response);
    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err });
  }
});


router.put('/:id',async(req,res)=>{
  try {
    
    const data = req.body;
    const id = req.params.id;

    const response = await Person.findByIdAndUpdate(id,data,{
      new:true,
      runValidators:true
    } );

    if(!response){
      return res.status(404).json({err:"person not found"})
    }

    res.status(201).json(response)


  } catch (error) {
      res.status(500).json({err:error.message})
  }

})


router.delete("/:id",async(req,res)=>{

  try {
    const id = req.params.id;

   const response = await Person.findByIdAndDelete(id)

   if(!response){
    return res.status(404).json({err:"Person not found"})

   }

   res.json({msg:"document deleted successfully"})

    
  } catch (error) {
      res.status(500).json({err:error.message})
  }

  
})



export default router;