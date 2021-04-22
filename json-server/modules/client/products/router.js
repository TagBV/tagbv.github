const express = require("express");
const { getProducts, getProductDetail } = require("./controller");
const route = express.Router();

route.get("/", getProducts);
route.get("/detailt/:id", getProductDetail);

module.exports = route;
