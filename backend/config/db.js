const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://urtaa:SthReallyRandom5648@cluster0.pd2ywh0.mongodb.net/mernapp?retryWrites=true&w=majority");
    console.log("MongoDB connected: ", conn.connection.host);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};


module.exports = {
    connectDB
};