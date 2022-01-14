const express = require('express')
const bodyParser = require("body-parser")
const path = require("path")
const app = express();
const routes = require("./routes/users")

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs")
app.set("views", "views")

app.use((req, res, next) => {
  console.log(req.url);
  next();
});



app.use("/form", routes)

app.use("/", (req, res) => {
  res.render("home", {user: "Shahid Chohan"});
});



app.listen("3000", () => {
  console.log(`Example app listening at http://localhost:3000`)
})