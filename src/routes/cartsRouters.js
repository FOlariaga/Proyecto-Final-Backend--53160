import { Router } from "express";
import config from "../config.js";
import CartsManager from "../managers/cartsManager.js";

const router = Router()
const manager = new CartsManager(`${config.DIRNAME}/mocks/carts.json`)

router.post("/", async (req, res) => {
    await manager.createCart()
    console.log("api/carts funciona con post")
})

router.post("/:cid/product/:pid", async (req, res) => {
    const cid = +req.params.cid
    const pid = +req.params.pid
    await manager.addProductToCart(cid, pid)
    console.log("api/carts/:cid funciona con post")
})

router.get("/:cid", async (req, res) => {
    const id = req.params.cid
    const productsCart = await manager.getCartById(id)
    res.send({status: "funciona", payload: productsCart})
    console.log("api/carts/:cid funciona con get")
})

export default router