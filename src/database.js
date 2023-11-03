import mongoose from "mongoose"


mongoose.connect("mongodb://127.0.0.1:27017",{
                keepAlive:true,
                useNewUrlParser:true,
                useUnifiedTopology: true,
                useFindAndModify: true,
                useCreateIndex: true
})
.then(db => console.log("conexion a la base de datos exitosa"))
.catch(error=>console.log(error));

