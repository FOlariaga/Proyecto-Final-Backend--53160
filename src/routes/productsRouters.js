import { Router } from "express";
import ProductManager from "../managers/productsManager.js";
import config from "../config.js";

const router = Router()
const manager = new ProductManager(`${config.DIRNAME}/mocks/products.json`)
router.get("/", async (req, res) => {
    const limit = req.query.limit
    const products =  await manager.getProduct(limit)
    res.send({status:"funciona", payload: products})
    console.log("api/products funciona con get")
})

router.get("/:pid", async (req, res) => {
    const id = req.params.pid
    const product = await manager.getProductById(id)
    res.send({status:"funciona", payload: product})
    console.log("api/products/:pid funciona con get")
})

router.post("/", async (req, res) => {
    await manager.addProduct(req.body)
    console.log("api/products funciona con post")
})

router.put("/:pid", async (req, res) => {
    const id = req.params.pid
    await manager.updateProduct(id, req.body)
    console.log("api/products/:pid funciona con put")
})

router.delete("/:pid", async (req, res) => {
    const id = req.params.pid
    await manager.deleteProduct(id)
    console.log("api/products/:pid funciona con dete")
})

export default router