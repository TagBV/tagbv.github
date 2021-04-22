const route = require("express").Router();

const {
  getProducts,
  getCarts,
  getProduct,
  getOrders,
  getCategories,
  createCategory,
  deleteCategory,
} = require("./controller");

route.get("/products", getProducts);
route.get("/carts", getCarts);
route.get("/orders", getOrders);
route.get("/categories", getCategories);
route.get("/product/detailt/:id", getProduct);

route.post("/categories/create", createCategory);
route.delete("/categories/delete/:id", deleteCategory);

module.exports = route;
