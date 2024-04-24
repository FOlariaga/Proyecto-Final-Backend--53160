import { Router } from "express";
import ProductManager from "../managers/productsManager.js";
import config from "../config.js";

const router = Router()
const manager = new ProductManager(`${config.DIRNAME}/mocks/products.json`)
router.get("/", async (req, res) => {
    const limit = req.query.limit
    const products =  await manager.getProduct(limit)
    res.send({status:"OK", payload: products})
})

router.get("/:pid", async (req, res) => {
    const id = req.params.pid
    const product = await manager.getProductById(id)
    res.send({status:"OK", payload: product})
})

router.post("/", async (req, res) => {
    await manager.addProduct(req.body)
})

router.put("/:pid", async (req, res) => {
    const id = req.params.pid
    await manager.updateProduct(id, req.body)
})

router.delete("/:pid", async (req, res) => {
    const id = req.params.pid
    await manager.deleteProduct(id)
})

export default router