const Users = require("../models/userModel");

exports.findUserByUsername = async (username) => {
    try {
        const user = await Users.findOne({ username });
        return user;
    } catch (error) {
        console.error("Error finding user by username:", error);
        throw error;
    }
};

