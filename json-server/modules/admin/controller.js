const {
  fetchOrders,
  fetchCategories,
  fetchAllProduct,
  fetchCreateCategory,
  fetchDeleteCategory,
} = require("../api/fetch");

module.exports = {
  getCategories: async (req, res) => {
    const { name } = req.body;
    const categories = await fetchCategories();
    if (name) {
      response = await fetchCreateCategory(req.body);
      res.redirect(req.originalUrl);
    } else {
      res.render("admin/page/categories", { categories });
    }
  },
  updateCategory: (req, res) => {
    res.send("updateCategory");
  },
  deleteCategory: async (req, res) => {
    const deleteCategory = await fetchDeleteCategory(req.params.id);
    res.redirect("http://localhost:8000/admin/categories");
  },
  getProducts: async (req, res) => {
    const products = await fetchAllProduct();
    const categories = await fetchCategories();
    res.render("admin/page/products", { products, categories });
  },
  createProduct: (req, res) => {
    res.json({
      status: 200,
      message: "success",
    });
  },
  updateProduct: (req, res) => {
    res.send("updateProduct");
  },
  deleteProduct: (req, res) => {
    res.send("deleteProduct");
  },
  getOrders: async (req, res) => {
    const orders = await fetchOrders();
    res.render("admin/page/orders", { orders });
  },
  updateOrders: (req, res) => {
    res.send("updateOrders");
  },
  deleteOrders: (req, res) => {
    res.send("deleteOrders");
  },
};
