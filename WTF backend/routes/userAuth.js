const userDetails = require('../models/userSchema')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const { v4: uuidv4 } = require('uuid');
//SIGNUP

// {
//     "first_name": "Arshad",
//     "last_name": "Khan",
//     "email": "arsh@gmail.com",
//     "password":"arsh",
//     "confirmPassword":"arsh"
// }

const userRegistration = async(req, res) => {
    const { first_name, last_name, email, mobile, role, status, password } = req.body;

    if (!first_name || !email || !password || !role){
        return res.status(422).send("Please Add all fields")
    }
    if(mobile.length!==10){
        return res.send(400).json({message:"Mobile should be 10 characters long "})
    }
    if(password.length!==10){
        return res.send(400).json({message:"Password should be 8 characters long "})
    }
    userDetails.findOne({email}).then(async(savedUser)=>{
        if (savedUser) {
            return res.status(422).json({message:"User already exists with that email"})
        }
        const hashedpassword = await bcrypt.hash(password, 12);
        const result = await userDetails.create({
            first_name,
            last_name,
            email,
            uid: uuidv4(),
            mobile,
            password: hashedpassword,
            role,
            status,
            token:""
        })
        res.status(200).json({result, message:'User saved successfully'})
    }).catch(err => res.status(500).json({message:"User.findOne savedUser part error => ", err} ))
}

//LOGIN

///////////////////   POST request sample for LOGIN   ///////////////// 
// {
//     "email": "arsh@gmail.com",
//     "password":"arsh"
// }

const userLogin = async(req, res) => {
    const {email, password} = req.body;
    if( !email || !password){
        return res.status(422).json({error: "All fields required"});
    }
    userDetails.findOne({email}).then(async(validation)=>{
        const PasswordVarification = await bcrypt.compare(password,validation.password)
        if(PasswordVarification){
            const token = jwt.sign({ id: validation._id, email:validation.email, role:validation.role }, "nirbhay", { expiresIn: "30days" });
            const ResponseToFrontEnd = {token, email, role:validation.role}
            // localStorage.setItem("UserToken", JSON.stringify(ResponseToFrontEnd))
            
            // await userDetails.findOneAndUpdate({email},{token})
            return res.status(200).json({token, data:validation ,status:200,message:"Logged in successfully"})
        }else{
            return res.status(422).json({message: "Verification Failed"})
        }           
    }).catch((err)=>res.status(422).json({message: "User not found, Please Sign-Up"}))
}

module.exports = { userRegistration, userLogin }