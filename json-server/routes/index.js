const express = require("express");
const route = express.Router();

const { fetchAllProduct, fetchAllCart } = require("../modules/api/fetch");

route.get("/", async (req, res) => {
  let totalCart = 0;
  const products = await fetchAllProduct();
  const cart = await fetchAllCart();

  cart.forEach((element) => {
    totalCart += element.price * element.quantity;
  });
  res.render("client/page/homePage", {
    title: "home page",
    products,
    cart,
    totalCart,
  });
});

module.exports = route;
