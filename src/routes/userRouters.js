import { Router } from "express";
import ProductManager from "../managers/productsManager.js"

const manager = new ProductManager()
const router = Router();


router.get("/:uid", (req, res) => {
    const id = req.params.uid
    console.log("por ahora funciona");
    const data = manager.getProduct(id)
    res.send({prueba:"funciona", payload: data})
})

// router.post("/user", (req, res) => {
// })

// router.put("/user", (req, res) => {
// })

// router.delete("/user", (req, res) => {
// })

export default router