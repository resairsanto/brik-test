const router = require("express").Router()
const Controller = require("../controllers")
const authentication = require("../middleware/authentication")
const errorHandler = require("../middleware/errorHandler")

router
   .post("/register", Controller.register)
   .post("/login", Controller.login)
   .use(authentication)
   .get("/products", Controller.getAllProducts)
   .post("/product", Controller.createProduct)
   .get("/product/:id", Controller.findProduct)
   .put("/product/:id", Controller.updateProduct)
   .delete("/product/:id", Controller.deleteProduct)
   .use(errorHandler)

module.exports = router

