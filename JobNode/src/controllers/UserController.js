const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Applications = require("../models/Applications");
const Resume = require("../models/Resumes");

const secretKey = process.env.JWT_SECRET || "secret_key";

// Đăng ký người dùng
exports.register = async (req, res) => {
  const { UserName, Password, Email, FullName, Phone, Role } = req.body;
  try {
    const existingUser = await User.findOne({ where: { UserName } });
    if (existingUser) {
      return res.status(400).json({ message: "ExistingUser" });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);
    const newUser = await User.create({
      UserName,
      PasswordHash: hashedPassword,
      Email,
      FullName,
      Phone,
      Role: Role || "Candidate",
    });
    const newResume = await Resume.create({
      UserID: newUser.UserID,
    });
    res.status(201).json({ message: "Đăng ký thành công!", user: newUser });
  } catch (error) {
    console.error("Error in register function:", error); // Log chi tiết
    res.status(500).json({ message: "Có lỗi xảy ra!", error });
  }
};

// Đăng nhập người dùng
exports.login = async (req, res) => {
  const { UserName, Password } = req.body;
  try {
    const user = await User.findOne({ where: { UserName } });
    if (!user) {
      return res.status(404).json({ message: "Người dùng không tồn tại!" });
    }

    const isPasswordValid = await bcrypt.compare(Password, user.PasswordHash);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Mật khẩu không đúng!" });
    }

    const token = jwt.sign(
      { UserID: user.UserID, Role: user.Role },
      secretKey,
      { expiresIn: "1d" }
    );

    res.status(200).json({ message: "Đăng nhập thành công!", token, user });
  } catch (error) {
    console.error("Error in login function:", error); // Log chi tiết
    res.status(500).json({ message: "Có lỗi xảy ra!", error });
  }
};

// Middleware kiểm tra quyền
exports.authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(403).json({ message: "Truy cập bị từ chối!" });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token không hợp lệ!" });
  }
};

// Phân quyền
exports.checkRole = (roles) => {
  return (req, res, next) => {
    const userRole = req.user.Role;
    if (!roles.includes(userRole)) {
      return res.status(403).json({ message: "Bạn không có quyền truy cập!" });
    }
    next();
  };
};
// Kiểm tra trạng thái đăng nhập và role
exports.checkLoginStatus = (req, res) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  console.log(token);
  if (!token) {
    return res.status(403).json({ message: "Chưa đăng nhập!" });
  }

  try {
    const decoded = jwt.verify(token, secretKey); // Giải mã token
    res.status(200).json({
      message: "Đã đăng nhập!",
      user: {
        UserID: decoded.UserID,
        Role: decoded.Role,
      },
    });
  } catch (error) {
    return res.status(401).json({ message: "Token không hợp lệ!" });
  }
};
// Lấy tất cả User
exports.getUser = async (req, res) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy User theo ID
exports.getUserByID = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Thêm mới User
exports.addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật User theo ID
exports.updateUser = async (req, res) => {
  try {
    const user = await User.update(req.body, {
      where: {
        UserID: req.params.id,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xóa User theo ID
exports.deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        UserID: req.params.id,
      },
    });
    res.json({ message: "Xóa thành công!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
