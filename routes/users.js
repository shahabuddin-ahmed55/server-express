const express = require("express")
const { send } = require("express/lib/response")
const routes = express.Router()

routes.get("/", (req, res) => {
    res.send("Salam User")
})

routes.get("/new", (req, res) => {
    res.send("Salam new users")
})

module.exports = routes