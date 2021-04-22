const {
  fetchAllProduct,
  fetchAllCart,
  fetchProduct,
} = require("../../api/fetch");

module.exports = {
  getProducts: async (req, res) => {
    let totalCart = 0;
    const products = await fetchAllProduct();
    const cart = await fetchAllCart();

    cart.forEach((element) => {
      totalCart += element.price * element.quantity;
    });

    res.render("client/page/products", {
      title: "products",
      products,
      cart,
      totalCart,
    });
  },
  getProductDetail: async (req, res) => {
    let totalCart = 0;
    const product = await fetchProduct(req.params.id);
    const cart = await fetchAllCart();

    cart.forEach((element) => {
      totalCart += element.price * element.quantity;
    });

    res.render("client/page/productDetailt", {
      title: "product detailt",
      product,
      cart,
      totalCart,
    });
  },
};
