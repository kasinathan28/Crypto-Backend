const Users = require("../models/userModel");

exports.signupUser = async (username, password, currency) => {
  try {
    const existingUsername = await Users.findOne({ username });
    if (existingUsername) {
      return { success: false, error: "Username already exists" };
    }

    const newUser = new Users({
      username,
      password,
      currency,
    });

    await newUser.save();

    return { success: true, message: "User created successfully" };
  } catch (error) {
    console.error("Error during signup:", error);
    return { success: false, error: "An error occurred during signup" };
  }
};
