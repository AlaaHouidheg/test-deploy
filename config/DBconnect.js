const mongoose = require("mongoose");

const DBconnect = async () => {
  try {
    let result = await mongoose.connect(process.env.DB_URI);
    console.log("database is conneceted");
  } catch (error) {
    console.log(`cannot connect to dabase ${error}`);
  }
};

module.exports = DBconnect;
