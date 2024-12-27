const UserControllers = require('../controllers/UserController');
const express = require('express');
const router = express.Router();

// Đăng nhập
router.post('/login', UserControllers.login);

// Đăng ký
router.post('/register', UserControllers.register);

// API yêu cầu xác thực (middleware authMiddleware)
router.get('/profile', UserControllers.authMiddleware, (req, res) => {
    res.status(200).json({ message: 'Đã xác thực!', user: req.user });
});

// API yêu cầu phân quyền (ví dụ chỉ dành cho Admin)
router.get(
    '/admin-only',
    UserControllers.authMiddleware,
    UserControllers.checkRole(['Admin']),
    (req, res) => {
        res.status(200).json({ message: 'Chào mừng Admin!' });
    }
);

// Lấy tất cả User
router.get('/', UserControllers.getUser);

// Lấy User theo ID
router.get('/:id', UserControllers.getUserByID);

// Thêm mới User
router.post('/', UserControllers.addUser);

// Cập nhật User theo ID
router.put('/:id', UserControllers.updateUser);

// Xóa User theo ID
router.delete('/:id', UserControllers.deleteUser);

module.exports = router;
