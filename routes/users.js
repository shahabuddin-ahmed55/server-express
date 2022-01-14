const express = require("express")
const path = require("path")
const routes = express.Router()


routes.post("/", (req, res, next) => {
    res.send(req.body);
    next();
})
routes.get("/", (req, res, next) => {
// res.send(req.url + "Changes");
    res.sendFile(path.join(__dirname, "../", "views" , "index.html"));
  })

module.exports = routes