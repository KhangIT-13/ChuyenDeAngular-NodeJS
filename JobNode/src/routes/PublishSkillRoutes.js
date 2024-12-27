const PublishSkillController = require('../controllers/PublishSkillController');
const express = require('express');
const router = express.Router();

// Lấy tất cả PublishSkill
router.get('/', PublishSkillController.getPublishSkill);

// Lấy PublishSkill theo ID
router.get('/:id', PublishSkillController.getPublishSkillByID);

// Thêm mới PublishSkill
router.post('/', PublishSkillController.addPublishSkill);

// Cập nhật PublishSkill theo ID
router.put('/:id', PublishSkillController.updatePublishSkill);

// Xóa PublishSkill theo ID
router.delete('/:id', PublishSkillController.deletePublishSkill);

module.exports = router;
