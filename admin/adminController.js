import Admin from "./adminModel.js";
import Class from "../classes/classModel.js";

export const allocateClass = async (req, res) => {
  const { id, faculty, occupiedBy, startTime, endTime } = req.body;
  try {
    const newClass = await Class.findByIdAndUpdate(id, {
      faculty: faculty,
      occupied: true,
      occupiedBy: occupiedBy,
      startTime: startTime,
      endTime: endTime,
    });
    res.status(200).json({
      success: true,
      message: "Class Allocated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error Alloacting Class",
    });
  }
};

export const login = async (req, res) => {
  const { id, password } = req.body;
  try {
    const user = await Admin.findOne({
      idno: id,
    });
    if (user.password != password) {
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
  const { username, idno, password, email, phone } = req.body;
  try {
    const user = await Admin.findOne({ idno: idno });
    if (user) {
      return res.status(400).json({ msg: "User already exists." });
    }
    const admin = new Admin({
      username,
      idno,
      password,
      role,
    });
    const savedAdmin = await admin.save();
    return res.status(201).json({
      success: true,
      message: `User created successfully`,
      user: savedAdmin,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
