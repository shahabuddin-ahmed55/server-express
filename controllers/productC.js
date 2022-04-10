const Product = require("../model/productsM");

exports.getAddProducts = (req, res) => {
    // res.send(req.url + "Changes");
        res.render("index", {title: "Naat Collection"})
      }

exports.postAddProducts = (req, res) => {
    const products = new Product(req.body.title)
    products.save();
    res.send("saved");
}

exports.fetchProducts = (req, res) => {
    const products = Product.fetchAll();
    res.render("productsV", {products});
}

