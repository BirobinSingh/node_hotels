import mongoose from 'mongoose';

const personSchema =  new  mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:['chef','cook','manager'],
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    address:String,
    salary:{
        type:Number,
        required:true
    },
    

},
{
    timestamps:true,
    collection:'persons'
}

);



const Person = mongoose.model('Person',personSchema)

export default Person;