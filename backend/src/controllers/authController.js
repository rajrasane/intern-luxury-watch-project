
require('dotenv/config')
const mongoose = require("mongoose");
const User = require("../models/User.js")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const generateAccessToken = (user) =>
  jwt.sign(
    { id: user._id, role: user.role },
    process.env.ACCESS_SECRET,
    { expiresIn: "15m" }
  );

const generateRefreshToken = (user) =>
  jwt.sign(
    { id: user._id },
    process.env.REFRESH_SECRET,
    { expiresIn: "7d" }
  );

exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "username, email and password are required"
      });
    }

    u = await User.findOne({email: email})
    if(u) return res.status(400).json({message: "user already exist please login "})

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    const userObj = user.toObject();
    delete userObj.password;

    const accessToken = generateAccessToken(userObj);
    const refreshToken = generateRefreshToken(userObj);

    user.refreshToken = refreshToken
    await user.save()

    res.status(201).json({user: userObj, refreshToken, accessToken, message: "User registered" });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).json({message: "please enter email and password"})
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: "Invalid credentials" });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    user.refreshToken = refreshToken;
    await user.save();

    res.json({ accessToken, refreshToken });
  } catch (err) {
    next(err);
  }
};

exports.refresh = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.sendStatus(401);

  const user = await User.findOne({ refreshToken });
  if (!user) return res.sendStatus(403);

  jwt.verify(refreshToken, process.env.REFRESH_SECRET, async (err, decoded) => {
    if (err) return res.sendStatus(403);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    user.refreshToken = newRefreshToken;
    await user.save();

    res.json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
  });
};

exports.logout = async (req, res) => {
  const { refreshToken } = req.body;
  succ = await User.findOneAndUpdate({ refreshToken }, { refreshToken: null });

  if(!succ) return res.status(401).json("Invalid refresh token")
  res.json({ message: "Logged out" });
};

exports.profile = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
};

exports.delete = async (req, res) =>{
  const user = await User.findByIdAndDelete(req.user.id)
  res.status(200).json({Message: "user deleted successfully"})
}

