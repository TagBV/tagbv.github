const route = require("express").Router();

const {
  getCategories,
  getProducts,
  getOrders,
  deleteCategory,
} = require("./controller");

route.get("/categories", getCategories);
route.get("/products", getProducts);
route.get("/orders", getOrders);

route.post("/categories", getCategories);

route.get("/categories/delete/:id", deleteCategory);

module.exports = route;
