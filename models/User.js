const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required:true
  },
  lastName: {
    type: String,
    required:true
  },
  age: {
    type: Number,
  },
  field: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
