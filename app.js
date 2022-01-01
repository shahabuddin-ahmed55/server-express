const express = require('express')
const app = express();
const routes = require("./routes/users")


app.use((req, res, next) => {
  console.log(req.url);
  next();
})



app.use("/form", routes)



app.listen("3000", () => {
  console.log(`Example app listening at http://localhost:3000`)
})