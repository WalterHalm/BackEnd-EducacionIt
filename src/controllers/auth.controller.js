import User from "../models/user.js"
import jwt from "jsonwebtoken"
import config from "../config.js"
import Role from "../models/role.js";


export const signUp =  async (req, res)=>{
    const {username, email, password, roles} = req.body;   

   const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })
//verificamos si al crear usuarios describe el rol
    if (roles){
        const foundRoles = await Role.find({ name: {$in:roles}})
        newUser.roles = foundRoles.map(role => role._id)
    } else{ //si no agregó rol le agremos por defecto "user"
        const role = await Role.findOne({name : "user"})
        newUser.roles = [role._id];
    }

    //guardamos usuario
   const savedUser = await newUser.save();

   console.log(savedUser);

   const token = jwt.sign({id:savedUser._id}, config.secret,{
    expiresIn: 86400 // 24horas
   } )

    res.status(200).json({token})
}


export const signIn =  async (req, res)=>{
   const userFound = await User.findOne({email: req.body.email}).populate("roles"); 
   if (!userFound) return res.status(400).json({message: "user no encontrado"})     //verificamos si existe el user
   
   const matchPassword = await User.comparePassword(req.body.password, userFound.password)
   if(!matchPassword) return res.status(401).json({token: null, message:"Password invalido"}) // verificamos si existe email
   
   const token = jwt.sign({id: userFound._id}, config.secret,{
    expiresIn:86400
   })
   res.json({token})  
}