import express from "express";
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js';

const router = express.Router();
// localhost:5002/users 'a yapılan post isteği
router.post("/signup", async (req, res)=>{
    try {
        //console.log(req.body)
        const { correctionPassword, password, email } = req.body;
        if(password=!correctionPassword){
            return res.status(400).json({message: 'Passwords do not match'})
        }
        const userExists = await User.findOne({ email })
        if(userExists)
            return res.status(400).json({ message: 'User already exists.'});
        const hashedPassword = (await bcrypt.hash(password, 10)).toString();
        const createdUser = await User.create(req.body);
        console.log(createdUser);
        return res.status(201).json(createdUser);
    } catch (error) {
        console.log(error)
        return res.json({message: "create user failed"})
    }
})
// localhost:5002/users/signin POST request
router.post("/signin", async (req,res)=>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        console.log('user ',user);
        if(!user){
            return res.status(400).json({message: "user does not exist"})
        }
        const isPasswordCorrect = password === user.password;
        if(!isPasswordCorrect){
            return res.status(400).json({message: "Wrong Password"})
        }
        return res.status(200).json({ user, message: 'Authentication successful' })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

export default router;