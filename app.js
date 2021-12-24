const express = require('express')
const app = express()
const port = 3000
app.set("view engine", "ejs")
app.use(express.static('public'))

var fs = require('fs');
var myCss = {
    style : fs.readFileSync('./public/css/style.css','utf8')
};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About')
  })

   app.get('/index', (req, res) => {
       res.render('index.ejs', {
         title: "world",
       });
     });

const usersRoutes = require("./routes/users")
app.use("/users", usersRoutes)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})