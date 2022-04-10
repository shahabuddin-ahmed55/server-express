const express = require("express")
const productsControllers = require("../controllers/productC")
const routes = express.Router()

routes.get("/", productsControllers.fetchProducts)

routes.get("/form", productsControllers.getAddProducts)

routes.post("/form", productsControllers.postAddProducts)

module.exports = routes