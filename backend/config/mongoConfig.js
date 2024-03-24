require("dotenv").config();
const mongoose = require("mongoose");

module.exports = {
  Database: () => {
    mongoose
      .connect(process.env.MongoDB_URL)
      .then(() => {
        console.log("Database connected");
      })
      .catch((error) => {
        console.log("error occured :", error);
      });
  },
};
