
import mongoose from 'mongoose'
import Schema from 'mongoose';
import model from "mongoose";



const productSchema = mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    imgURL: String    
},{
    timestamps: true,
    versionKey:false
})

export default mongoose.model ("Product", productSchema)