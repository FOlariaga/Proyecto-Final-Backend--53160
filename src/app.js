import express from "express";
import config from "./config.js";
import userRouters from "./routes/userRouters.js";
import productsRouters from "./routes/productsRouters.js";
import cartsRouters from "./routes/cartsRouters.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/users",userRouters)
app.use("/api/products" ,productsRouters)
app.use("/api/carts", cartsRouters)

app.listen(config.PORT, () => {
    console.log(`app iniciada en el puerto ${config.PORT}`)
})