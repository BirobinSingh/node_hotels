import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    is_drink:{  
        type:Boolean,
        default:false
    },
    taste:{
        type:String,
        enum:['sweet','salty','sour']
    },
    ingredients:{
        type:[String],
        default:[]
    }

})

const Menu = mongoose.model('Menu',menuSchema);

export default Menu;