const mongoose = require("mongoose");
require("dotenv").config()

try {
  mongoose.connect("mongodb+srv://haran_irah:haran_irah@cluster0.vioegna.mongodb.net/haran_irah?retryWrites=true&w=majority&appName=Cluster0");
  console.log("Database Connected Successfully");
} catch (err) {
  console.log(err);
  console.log("Database Not Connected");
}
