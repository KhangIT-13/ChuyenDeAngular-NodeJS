const ProvinceController = require('../controllers/PrivinceController');
const express = require('express');
const router = express.Router();

// Lấy tất cả Province
router.get('/', ProvinceController.getProvince);

// Lấy Province theo ID
router.get('/:id', ProvinceController.getProvinceByID);

// Thêm mới Province
router.post('/', ProvinceController.addProvince);

// Cập nhật Province theo ID
router.put('/:id', ProvinceController.updateProvince);

// Xóa Province theo ID
router.delete('/:id', ProvinceController.deleteProvince);

module.exports = router;
