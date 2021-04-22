const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const pug = require("pug");
require("dotenv").config();

const PORT = 8000;

const routeProduct = require("./modules/json/router");

app.use(bodyParser.urlencoded({ extends: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "pug");

app.use("/api", routeProduct);

app.use(require("./routes"));
app.use("/products", require("./modules/client/products/router"));

app.use("/admin", require("./modules/admin/dashboard"));
app.use("/admin", require("./modules/admin/router"));

app.listen(PORT);
