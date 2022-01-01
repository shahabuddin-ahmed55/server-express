const express = require("express")
const { send } = require("express/lib/response")
const routes = express.Router()

routes.get("/", (req, res, next) => {
    // res.send(req.url + "Changes");
    res.send(`
    <form action="/form" method="POST">
    <input name="input" placeholder="Favicon" require="require""/>
    <button>Submit</ button>
    </form>
    `);
    next();
  })

routes.post("/form", (req, res, next) => {
    res.send("Shahabuddin");
    next();
  })

module.exports = routes