const mongoose = require("mongoose");
// const { type } = require("os");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  currency:{
    type: String,
    required: true,
  }
});

const Users = mongoose.model("User", userSchema);

module.exports = Users;