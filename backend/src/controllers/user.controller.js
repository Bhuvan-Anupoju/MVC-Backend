import User from "../models/user.model.js";
import bcrypt from "bcrypt";

// Register api
const registerUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // basic validation

    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields need to be filled" });
    }

    // Check if user is exists in the DB

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({ message: "user already exists" });
    }

    // Create user

    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password,
    });
    res.status(201).json({
      message: "User created successfully!!",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        password: user.password,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// Login api
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // if the user is present in the DB
    const user = await User.findOne({
      email: email.toLowerCase(),
    });

    //if user not in the DB
    if (!user) return res.status(404).json({ message: "user not found" });

    // Compareing passwords
    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });
    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

// Logout api
const logoutUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { registerUser, loginUser, logoutUser };
