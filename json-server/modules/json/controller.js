const low = require("lowdb");
const shortid = require("shortid");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ category: [], products: [], cart: [], orders: [] }).write();

module.exports = {
  getProducts: async (req, res) => {
    const products = await db.get("products").value();
    res.json({
      status: 200,
      message: "success",
      payload: products,
    });
  },
  getCarts: async (req, res) => {
    const cart = await db.get("cart").value();
    res.json({
      status: 200,
      message: "success",
      payload: cart,
    });
  },
  getProduct: async (req, res) => {
    const product = await db
      .get("products")
      .find({ id: req.params.id })
      .value();
    res.json({
      status: 200,
      message: "success",
      payload: product,
    });
  },
  getOrders: async (req, res) => {
    const orders = await db.get("orders").value();
    res.json({
      status: 200,
      message: "success",
      payload: orders,
    });
  },
  getCategories: async (req, res) => {
    const categories = await db.get("category").value();
    res.json({
      status: 200,
      message: "success",
      payload: categories,
    });
  },
  createCategory: async (req, res) => {
    const { name } = req.body;
    const checkName = db.get("category").find({ name: name }).value();

    if (!name) {
      return res.json({
        status: 400,
        message: "success",
        payload: { message: `category not found` },
      });
    }

    if (checkName) {
      return res.json({
        status: 400,
        message: "success",
        payload: { message: `category ${name} already exists` },
      });
    }

    await db
      .get("category")
      .push({ id: shortid.generate(), name: name })
      .write();

    res.json({
      status: 200,
      message: "success",
      payload: { message: "create category successfull" },
    });
  },
  deleteCategory: async (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(404).send("not found");

    const category = await db.get("category").remove({ id: id }).write();

    if (!category || category.length === 0) {
      return res.json({
        status: 200,
        message: "success",
        payload: { message: "not found id" },
      });
    }

    res.json({
      status: 200,
      message: "success",
      payload: { message: "delete category successfull" },
    });
  },
};
