const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
    email:String,
    password:String,
    image:String
});

const User = mongoose.model("User", userSchema, "user");
module.exports = User;