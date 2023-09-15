const router = require("express").Router()
const Controller = require("../controllers")

router
   .post("/register", Controller.register)
   .post("/login", Controller.login)
   .get("/products", Controller.getAllProducts)
   .post("/product", Controller.createProduct)
   .put("/product/:id", Controller.updateProduct)
   .delete("/product/:id", Controller.deleteProduct)

module.exports = router

