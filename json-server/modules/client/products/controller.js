const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
 
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({products: []}).write();

module.exports = {
    getProducts: (req, res) => {
        const products = db.get("products").value();
        res.json(products);
    },
    createProductForm: (req, res) => {
        res.render("client/page/homePage");
    },
    createProduct: (req, res) => {
        res.json({
            status:200,
            message: "success"
        })
    }
}