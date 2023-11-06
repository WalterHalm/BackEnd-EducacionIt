import mongoose from "mongoose"
import config from "./config.js"




mongoose.connect(config.mongoUrlAtlas,{
                keepAlive:true,
                useNewUrlParser:true,
                useUnifiedTopology: true,
                useFindAndModify: true,
                useCreateIndex: true
})
.then(db => console.log("conexion a la base de datos exitosa"))
.catch(error=>console.log(error));

