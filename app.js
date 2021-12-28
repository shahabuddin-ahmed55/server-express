const express = require('express')
const app = express();



app.use((req, res, next) => {
  res.send(req.url);
})


app.listen("3000", () => {
  console.log(`Example app listening at http://localhost:3000`)
})