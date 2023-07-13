const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt");
const User = require("../models/userModel")
//@desc Register a user
//@route POST /api/users/register
//@access PUBLIC
const registerUser = asyncHandler(async (req, res)=>{
  const {username, email, password} = req.body;
  if(!username || !email || !password){
    res.status(400);
    throw new Error("All Fields are mandatory");
  }
  // checking if user is already present in db
  const userAvailable = await User.findOne({email});
  if(userAvailable){
    res.status(400);
    throw new Error("User already exists");
  }
  // we need to hash our password as we are getting it in raw form. we use bcrypt lib
  // Hash password
  const hashPassword = await bcrypt.hash(password, 10);
  console.log("hashed password", hashPassword);
  const user = await User.create({
    username,
    password,
    password : hashPassword
  });
  console.log(`User created successfully ${user}`);
  res.json({message : "Register the user"})
  if(user){
    res.status(201).json({_id : user.id, email : user.email})
  } else {
    res.status(400);
    throw new Error("User Data is not valid");
  }
});

//@desc Login user
//@route POST /api/users/login
//@access PUBLIC
const loginUser = asyncHandler(async (req, res)=>{
  res.json({message : "Login user"})
});

//@desc Current User Info
//@route GET /api/users/current
//@access PRIVATE
const currentUser = asyncHandler(async (req, res)=>{
  res.json({message : "Current User Info"})
});





module.exports = { registerUser, loginUser, currentUser}