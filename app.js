const express = require('express')
const bodyParser = require("body-parser")
// const path = require("path")
const app = express();
const DBRun = require("./db")
DBRun().catch(console.dir);
const productsRoutes = require("./routes/productsR")
const apiRoutes = require("./routes/api")
const supposeRoutes = require("./routes/suppose")

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs")
app.set("views", "views")


app.use((req, res, next) => {
  console.log(req.url);
  next();
});



app.use("/api", apiRoutes)
app.use("/products", productsRoutes)
app.use("/suppose", supposeRoutes)

app.use("/", (req, res) => {
  res.render("home", {user: "app"});
});



app.listen("3000", () => {
  console.log(`Example app listening at http://localhost:3000`)
})