const WelfareController = require('../controllers/WelfareController');
const express = require('express');
const router = express.Router();

// Lấy tất cả Welfare
router.get('/', WelfareController.getWelfare);

// Lấy Welfare theo ID
router.get('/:id', WelfareController.getWelfareByID);

// Thêm mới Welfare
router.post('/', WelfareController.addWelfare);

// Cập nhật Welfare theo ID
router.put('/:id', WelfareController.updateWelfare);

// Xóa Welfare theo ID
router.delete('/:id', WelfareController.deleteWelfare);

module.exports = router;
