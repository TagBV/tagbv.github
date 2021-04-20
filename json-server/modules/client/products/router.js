const express = require('express');
const { getProducts,createProductForm,createProduct } = require('./controller');
const route = express.Router();

route.get("/", getProducts);
route.get("/create", createProductForm);
route.post("/create", createProduct);

module.exports = route; 