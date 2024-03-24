const express = require("express");
const route = express();
const controller = require("../Controllers/controllers")

route.post("/signup",controller.userRegistration);


module.exports = route;