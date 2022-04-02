const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
{
    name:String,
  gender:String,
  country:String,
 state: String,
  image: String,
});

const Client = mongoose.model("Client", clientSchema, "client");
module.exports = Client;