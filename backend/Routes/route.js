const express = require("express");
const route = express();
const controller = require("../Controllers/controllers")

route.post("/signup",controller.userRegistration);
route.post("/login", controller.userLogin)


module.exports = route;