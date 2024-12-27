const ExperienceController = require('../controllers/ExperienceController');
const express = require('express');
const router = express.Router();

// Lấy tất cả Experience
router.get('/', ExperienceController.getExperience);

// Lấy Experience theo ID
router.get('/:id', ExperienceController.getExperienceByID);

// Thêm mới Experience
router.post('/', ExperienceController.addExperience);

// Cập nhật Experience theo ID
router.put('/:id', ExperienceController.updateExperience);

// Xóa Experience theo ID
router.delete('/:id', ExperienceController.deleteExperience);

module.exports = router;