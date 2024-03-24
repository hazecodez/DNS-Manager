const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");

exports.userRegistration = async(req,res) => {
    try {
        console.log(req.body);
    } catch (error) {
        console.log(error.message);
    }
}