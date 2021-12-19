const User = require("../models/User");
exports.createUserDao = async (payload) => {
  try {
   return await User.create(payload);
  } catch (error) {
    throw new Error(error);
  }

  //db operations in here
};
