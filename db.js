import mongoose from 'mongoose'

const mongooseUrl = 'mongodb://127.0.0.1:27017/hotels';

// mongoose.connect(mongooseUrl
//     ,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }

// parameter not use anymore
// );


try{
    await mongoose.connect(mongooseUrl);
    console.log('mongodb connected successfully')
}
catch(err){
    console.log('failed to connect',err)
}


const db = mongoose.connection;

//event listeners


// db.on('connected',()=>{
//     console.log('Mongodb connected successfuly')
// });

db.on('error',(err)=>{
    console.log('mongodb connection error',err)
});


db.on('disconnected',()=>{
    console.log('mongodb  server disconnected')
})


export default db;
