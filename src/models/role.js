
import mongoose from 'mongoose'
import Schema from 'mongoose';
import model from "mongoose";

export const ROLES = ["user", "moderador", "admin"];

const roleSchema =  mongoose.Schema (
    {
    name: String
},  
    {
        versionKey: false
    }
    );

export default mongoose.model ("Role", roleSchema)