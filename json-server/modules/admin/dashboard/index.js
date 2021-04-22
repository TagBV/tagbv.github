const route = require("express").Router();

route.get("/", (req, res) => {
  res.render("admin/page/dashboard", { title: "dashboard" });
});

module.exports = route;
