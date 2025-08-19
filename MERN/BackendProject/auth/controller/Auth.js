const bcript = require("bcryptjs");
const User = require("../model/user");

// signup
exports.signUp = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });    
        }
        // secure password
        const hashedPassword = await bcript.hash(password, 10);
        // create user
        const user = new User({ name, email, password: hashedPassword, role });
        await user.save();
        res.status(201).json({ message: "User created successfully and logged in 🤩" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};


