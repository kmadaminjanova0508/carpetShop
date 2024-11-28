import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

//Route for user login

const loginUser = async (req, res) => {
  try {
    
    const {email, password} = req.body;

    const user = await userModel.findOne({email});
    if (!user) {
        return res.json({success:false, message: 'User does not exists'})
    }
    
    const isMatch =  await bcrypt.compare(password, user.password);

 
    if (isMatch) {
        const token = createToken(user._id);
         res.json({success: true, token})
    }
    else {
        return res.json({success:false, message: 'Password does not match'})
    }

  } catch (error) {
    console.log(error);
    res.json({success:false, message:error.message})
  }
}

//Route for user registration
const registerUser = async (req,res) => {

    try {
        
        const {name, email,password} = req.body

        //Checking user already exist
        const exist = await userModel.findOne({email});
        if (exist) {
            return res.json({success:false, message: 'User already exists'})
        }
 
        //validate e-mail and password
       if(!validator.isEmail(email)){
        return res.json({success:false, message: 'Please enter a valid email'})
       }
       if(password.length < 8 ){
        return res.json({success:false, message: 'Please enter strong password'})
       }

       //Hash password
       const salt = await bcrypt.genSalt(10)
       const hashedPassword = await bcrypt.hash(password, salt)

       const newUser = new userModel({
        name,
        email,
        password: hashedPassword
       })
      const user = await newUser.save()

      const token = createToken(user._id)

      res.json({success:true, token})


    } catch (error) {
        
        console.log(error);
        res.json({success:false, message:error.message})

    }


}


//Route for admin login
const adminLogin = async (req,res) => {
try {
    
const{email,password} = req.body

if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign(email+password, process.env.JWT_SECRET);
    res.json({success:true, token})
} else{
    res.json({success:false, message:"Invalid credatials"})
}

} catch (error) {
    console.log(error);
    res.json({success:false, message:error.message})
}
}


export { loginUser, registerUser, adminLogin}