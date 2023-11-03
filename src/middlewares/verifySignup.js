

import {ROLES} from "../models/role.js"
import User from "../models/user.js"


//verificamos si usuarios y/o email existen

export const UserOfEmailDuplicate = async (req, res, next) =>{
    const user = await User.findOne({username: req.body.username})
    if(user) return res.status(400).json ({message: "El Usuario ya existe"})

    const email = await User.findOne({email: req.body.email})
    if(email) return res.status(400).json ({message: "El Email ya existe"})

    next();
}




// verifiamos si roles ya existen en la base de datos
export const checkRolesExisted = (req, res, next) => {
    if (req.body.roles){
        for(let i=0; i< req.body.roles.length; i++){
            if(!ROLES.includes(req.body.roles[i])) {
                return res.status(400).json({message: `Role ${req.body.roles[i]} No Existe`})
            }
        }
    }

    next();
}





