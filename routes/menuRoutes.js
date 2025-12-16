import express from "express";

const router = express.Router();
import Menu from "../models/menu.js";

// menus

router.post("/",async(req,res)=>{
    try{
        const data = req.body;
        const newMenu = new Menu(data);
        const response = await newMenu.save();
       res.status(201).json({
            success:true,
            message:"data created successfully",
            data:response
        })
    }
    catch(err){
        res.status(500).json({err:err})
    }
})


router.get("/",async(req,res)=>{
    try {
        
        const menu = await  Menu.find() 

        if(menu.length == 0){
            const msg = "data get successfully";
            return res.status(200).json({success:msg})
        }
        res.status(201).json({
            success:true,
            message:"data created successfully",
            data:menu
        })

    } catch (error) {
        res.status(500).json({err:err})

    }
})


export default router;