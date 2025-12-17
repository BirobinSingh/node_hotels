import dotenv from "dotenv";
dotenv.config();          // ✅ FIRST

import express from "express";
import  "./db.js";


import personRoutes from "./routes/personRoutes.js";
import menuRoutes from "./routes/menuRoutes.js"

// const express = require('express');



const app = express();

const port = process.env.PORT || 3000 ;


// ealier we use bodyparser middleware
app.use(express.json());


//routes

const logReqeuest = (req ,res ,next) => {
  console.log(`${new Date().toLocaleString()} request made to : ${req.originalUrl}` )
}

app.get("/",logReqeuest, (req, res) => {  
  res.send("hello all this is new project for learning the backend");
});

app.use('/person',personRoutes);

app.use('/menu',menuRoutes)



// app.get("/person",async(req,res)=>{

//     try{

//         const persons = await Person.find();

//         res.status(200).json(persons);

//     }catch(err){
//         res.send(500).json({err:err})
//     }

// })




// app.post("/person", async (req, res) => {
//   try {
//     const data = req.body;
//     //create a new person model using a mongoose model
//     const newPerson = new Person(data);
//     //save the new person to database
//     const response = await newPerson.save();
//     console.log(response);
//     res.status(201).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ err: err });
//   }
// });





//route parameter
app.get("/persons/:name/:age", (req, res) => {
  const names = req.params.name;
  var detail = {
    name: req.params.name,
    age: req.query.age,
    detail: `hello all + ${names} + ${req.params.age}`,
  };
  res.send(detail);
});

//using the query params
app.get("/persons", (req, res) => {
  const names = req.query.name;
  var detail = {
    name: req.query.name,
    age: req.query.age,
    detail: `hello alld + ${names} + ${req.query.age}`,
  };
  res.send(detail);
});



app.listen(port, () => console.log(`server started at ${port} `));




// app.get('/person', (req, res) => {
//     const { name, age } = req.query;

//     res.send({
//         name,
//         age,
//         detail: `hello all ${name} ${age}`
//     });
// });





app.get("/intro", (req, res) => {
  var intro = {
    name: "robin singh gusain",
    age: 30,
    occupation: "developer",
  };

  res.send(intro);
});