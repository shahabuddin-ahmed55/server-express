const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
    // res.send("Salam")
    res.render("suppose", {name: "Shahabuddin", fName: "Shahid Chohan"})
})

routes.get("/form", (req, res) => {
    const url = req.body;
    // res.send(url);
    res.render("index", {title: "suppose"})
})

routes.post("/form", (req, res) => {
    res.send("Done");
})

module.exports = routes;