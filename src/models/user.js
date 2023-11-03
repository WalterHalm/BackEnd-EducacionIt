
import mongoose from 'mongoose'
import Schema from 'mongoose';
import model from "mongoose";
import bcrypt from "bcryptjs";


//creamos modelo para user
const userSchema =  mongoose.Schema({
    username:{
        type: String,
            unique: true        
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{        
        type: Schema.Types.ObjectId,
        ref: "Role",
    }]
},
    {
        timestamps: true,
        versionKey: false
    }
)

//ciframos el password 

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

//comparamos password

userSchema.statics.comparePassword = async (password, receivedPassword) =>{
    return await bcrypt.compare(password,receivedPassword)
}


export default mongoose.model ("User", userSchema);


