import express from "express";
import morgan from "morgan";
import productsRoutes from "./routes/products.routes.js"
import authRoutes from "./routes/auth.routes.js"
import {createRoles} from "./libs/inicioSetup.js"
import usersRoutes from "./routes/user.routes.js"

import path from "path"


//init
const app = express()
createRoles();


app.use (express.json());
app.use(morgan("dev"));



//routes
app.use("/api/products", productsRoutes)
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);



export default app;