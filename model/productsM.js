const products = [];

class Products {
    constructor(title) {
        this.title = title;
    }
    save() {
        products.push({title: this.title})
    }
    static fetchAll () {
        return products;
    }
}

module.exports = Products;
