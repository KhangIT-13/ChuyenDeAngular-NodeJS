const EducationLevelController = require('../controllers/EducationLevelController');
const express = require('express');
const router = express.Router();

// Lấy tất cả EducationLevel
router.get('/', EducationLevelController.getEducationLevel);

// Lấy EducationLevel theo ID
router.get('/:id', EducationLevelController.getEducationLevelByID);

// Thêm mới EducationLevel
router.post('/', EducationLevelController.addEducationLevel);

// Cập nhật EducationLevel theo ID
router.put('/:id', EducationLevelController.updateEducationLevel);

// Xóa EducationLevel theo ID
router.delete('/:id', EducationLevelController.deleteEducationLevel);

module.exports = router;
