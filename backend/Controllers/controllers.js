const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");

const securePassword = async (password) => {
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    return hashPassword;
  } catch (error) {
    console.log(error.message);
  }
};

exports.userRegistration = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    const secPassword = await securePassword(password);
    const exist = await User?.findOne({ email: email });
    if (exist) {
      res.json({
        alert: "Given email is already exist, please login.",
        status: false,
      });
    } else {
      const user = new User({
        name: name,
        email: email,
        password: secPassword,
      });
      const userData = await user.save();
      let token = jwt.sign({ userId: userData._id }, process.env.SECRET_TOKEN, {
        expiresIn: "1h",
      });
      res.json({ userData, status: true, token });
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const exist = await User?.findOne({ email: email });
    if (exist) {
      const compare = await bcrypt.compare(password, exist.password);
      if (compare) {
        let token = jwt.sign({ userId: exist._id }, process.env.SECRET_TOKEN, {
          expiresIn: "1h",
        });
        res.json({ userData: exist, status: true, token });
      } else {
        res.json({ err: "pass", alert: "Incorrect password !!" });
      }
    } else {
      res.json({
        err: "email",
        alert: "Account isn't exist, please register.",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
