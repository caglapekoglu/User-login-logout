import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express'
import userRouter from './routers/userRouter.js'
import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.json());
app.use("/users",userRouter) 
dotenv.config();
mongoose.connect(process.env.DB_CONNECTION_STRING)
.then((con)=> console.log('connected to db'))
.catch((error)=>console.log('error',error.message))
app.listen(5002,()=>{
   console.log('listening 5002');
})