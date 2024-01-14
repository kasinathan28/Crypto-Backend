
const userRepository = require("../repositories/userRespositary");

exports.login = async (req, res) => {
    console.log("login called 1");
    const { username, password } = req.body;

    try {
        const user = await userRepository.findUserByUsername(username);

        if (!user || user.password !== password) {
            res.status(401).json({ success: false, error: "Invalid username or password" });
            return;
        }

        res.status(200).json({ success: true, message: "Login successful" });
        console.log("successfully logged in");
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ success: false, error: "An error occurred during login" });
    }
};
