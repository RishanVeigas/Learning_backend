//require('dotenv').config({path:'./env'});


import connectDb from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: './env'
})

connectDb();


























/*

import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import express from "express";
const app=express();

(aysnc () =>{
      try {
         await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
         app.on("error",()=>{
            console.log("ERR",error);
            throw error;
         })
         app.listen(process.env.PORT,()=>{
            console.log(`App is listening in port ${process.env.PORT}`);
            
         })
      }catch (err){
        console.error("ERROR:",err)
        throw err
      }
})()

*/