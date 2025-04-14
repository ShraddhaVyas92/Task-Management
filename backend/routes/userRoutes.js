import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();
const userRoute = express.Router();
/*const users = [
    {
        username:"myuser",
        password:"sample",
        email:"sample@outlook.com",
    },
    {
        username:"myuser1",
        password:"sample1",
        email:"sample1@outlook.com",
    }
];*/

// CREATE User
userRoute.post('/', async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

userRoute.get('/',async (req,res) => {
    try{
        const users = await User.find(); // fetches all documents in the 'users' collection
        res.json(users);
    }
    catch(err)
    {
        res.status(400).json({error:'failed to fecth data' + err});
    }
})

userRoute.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ username, email, password });
        await user.save(); 
        console.log("User saved:", user);
        res.status(201).send({ user, message: "User created successfully" });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

userRoute.post('/login', async (req, res) => {
    try {
        
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({ error: "Email and password are required" });
        }
        const user = await User.findOne({ email }); // 🔍 Find user by email

        if (!user) throw new Error("Unable to login");

        const isMatch = await bcrypt.compare(password, user.password); // ✅ Compare hashed password

        if (!isMatch) throw new Error("Invalid Password");

        const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET_KEY);

        //res.send({ user, token, message: "Logged in successfully" });
        res.send({
            user: { _id: user._id, username: user.username, email: user.email },
            token,
            message: "Logged in successfully"
          });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

export { userRoute };
