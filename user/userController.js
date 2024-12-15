import User from "./userModel.js";
import Class from "../classes/classModel.js";
import jwt from "jsonwebtoken";

export const classFinder = async (res, req) => {
  const  id  = req.user._id;
  try {
    const user = await User.findById(id);
    const classes = await Class.find({
      occupiedBy: user.course + "-" + user.section,
    });  
    res.json(classes);
  } catch (err) {
    res.status(404).json({ message: "No classes found", error: err.message });
  }
};

export const login = async (req, res) => {
  const { id, password } = req.body;
  try {
    const user = await User.findOne({
      studentId: id,
    });
    if (password != user.password) {
      return res.status(400).json({ msg: "Invalid credentials. " });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = jwt.sign(tokenData, process.env.JWT_SECRET);
    return res
      .status(201)
      .cookie("token", token)
      .json({
        token,
        message: `Welcome back ${user.username}`,
        user,
        success: true,
      });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const register = async (req, res) => {
  const { name, studentId, password, course, section, academicYear } = req.body;
  try {
    const user = await User.create({
      name,
      studentId,
      password,
      course,
      section,
      academicYear,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
