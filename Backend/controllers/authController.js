const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const User = require("../models/User");
require("dotenv").config();
const {generateOTP, sendEmail } = require('../utils/email')

const login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const register = async (req, res) => {
  console.log(req.body)
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username : req.body.username,
      email: req.body.email,
      role : req.body.userType,
      password: hashedPassword,
    });

    const user = await newUser.save();

    // Return the newly created user to the client
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const forgotPassword = async (req, res) => {
  console.log('f', req.body)
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const otp = generateOTP();
  user.passwordResetOTP = {
    otp,
    expiresAt: new Date().getTime() + 15 * 60 * 1000, // 15 minutes
  };
  await user.save();

  // Send OTP to user's email
  sendEmail(email, 'Password Reset OTP', `Your OTP is: ${otp}`);

  res.json({ message: 'OTP sent successfully' });
}

const resetPassword = async (req, res) => {
  console.log('r', req.body)
  const { email, otp, newPassword } = req.body;
  const user = await User.findOne({ email });

  if (!user || !user.passwordResetOTP || user.passwordResetOTP.otp !== otp || user.passwordResetOTP.expiresAt < Date.now()) {
    return res.status(400).json({ message: 'Invalid OTP' });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  // Update user's password and clear OTP data
  user.password = hashedPassword;
  user.passwordResetOTP = undefined;
  await user.save();

  res.json({ message: 'Password updated successfully' });
}

module.exports = { login, register, forgotPassword, resetPassword };
