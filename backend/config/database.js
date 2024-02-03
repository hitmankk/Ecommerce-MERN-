const mongoose = require("mongoose");

const connerctDatabase = () => {
  mongoose.connect(process.env.DB_URI).then((data) => {
    console.log(`connected to database:${data.connection.host}`);
  });
};

module.exports = connerctDatabase;
