const express = require('express');
const route = express.Router();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
 
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({products: [], cart: []}).write();

route.get("/", (req, res) => {
    let totalCart = 0;
    const products = db.get("products").value();
    const cart = db.get("cart").value();
    cart.forEach(element => {
        totalCart+=element.price*element.quantity;
    });
    res.render("client/page/homePage", {title: "home page", products, cart, totalCart});
});

module.exports = route;