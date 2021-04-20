const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const pug = require('pug');
require("dotenv").config();

const PORT = 8000;

app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.json());

app.use(express.static('public'))

app.set('views', './views');
app.set('view engine', 'pug');

app.use(require("./routes"));
app.use("/products", require("./modules/client/products/router"));

app.use("/shopAdmin", require("./modules/admin/dashboard/router"));


app.listen(PORT);