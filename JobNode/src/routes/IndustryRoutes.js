const IndustryController = require('../controllers/IndustryController');
const express = require('express');
const router = express.Router();

// Lấy tất cả Industry
router.get('/', IndustryController.getIndustry);

// Lấy Industry theo ID
router.get('/:id', IndustryController.getIndustryByID);

// Thêm mới Industry
router.post('/', IndustryController.addIndustry);

// Cập nhật Industry theo ID
router.put('/:id', IndustryController.updateIndustry);

// Xóa Industry theo ID
router.delete('/:id', IndustryController.deleteIndustry);

module.exports = router;
