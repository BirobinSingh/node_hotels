import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config()

// const mongooseUrl = 'mongodb://127.0.0.1:27017/hotels';

const mongooseUrl = process.env.MONGO_URL;
// const mongooseUrl ="mongodb+srv://grobin578_db_user:Z61ksFETOduwCGux@cluster0.2mfynf8.mongodb.net/node_db?appName=Cluster0"


// mongoose.connect(mongooseUrl
//     ,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }

// parameter not use anymore
// );

if (!mongooseUrl) {
  console.error("❌ MONGO_URL is undefined");
  process.exit(1);
}


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
