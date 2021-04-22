const fetch = require("node-fetch");

module.exports.fetchAllProduct = async (req, res) => {
  // use async await and fetch data
  const data = await fetch("http://localhost:8000/api/products").then((res) =>
    res.json()
  );

  return data.payload;
};

module.exports.fetchAllCart = async (req, res) => {
  // use async await and fetch data
  const data = await fetch("http://localhost:8000/api/carts").then((res) =>
    res.json()
  );

  return data.payload;
};

module.exports.fetchProduct = async (params) => {
  // use async await and fetch data
  const data = await fetch(
    `http://localhost:8000/api/product/detailt/${params}`
  ).then((res) => res.json());
  return data.payload;
};

module.exports.fetchOrders = async (req, res) => {
  const data = await fetch(
    "http://localhost:8000/api/orders"
  ).then((response) => response.json());

  return data.payload;
};

module.exports.fetchCategories = async (req, res) => {
  const data = await fetch(
    "http://localhost:8000/api/categories"
  ).then((response) => response.json());

  return data.payload;
};

module.exports.fetchCreateCategory = async (category) => {
  const data = await fetch("http://localhost:8000/api/categories/create", {
    method: "post",
    body: JSON.stringify(category),
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());

  return data.payload;
};

module.exports.fetchDeleteCategory = async (id) => {
  const data = await fetch(
    `http://localhost:8000/api/categories/delete/${id}`,
    {
      method: "DELETE",
    }
  ).then((response) => response.json());

  return data.payload;
};
