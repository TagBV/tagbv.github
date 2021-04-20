const route = require('express').Router();
const {dashboard} = require("./controller");

route.get("/", dashboard)

module.exports = route;