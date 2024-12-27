const SkillController = require('../controllers/SkillController');
const express = require('express');
const router = express.Router();

// Lấy tất cả Skill
router.get('/', SkillController.getSkill);

// Lấy Skill theo ID
router.get('/:id', SkillController.getSkillByID);

// Thêm mới Skill
router.post('/', SkillController.addSkill);

// Cập nhật Skill theo ID
router.put('/:id', SkillController.updateSkill);

// Xóa Skill theo ID
router.delete('/:id', SkillController.deleteSkill);

module.exports = router;
