const ResumeSkillController = require('../controllers/ResumeSkillController');
const express = require('express');
const router = express.Router();

// Lấy tất cả ResumeSkill
router.get('/', ResumeSkillController.getResumeSkill);

// Lấy ResumeSkill theo ID
router.get('/:id', ResumeSkillController.getResumeSkillByID);

// Thêm mới ResumeSkill
router.post('/', ResumeSkillController.addResumeSkill);

// Cập nhật ResumeSkill theo ID
router.put('/:id', ResumeSkillController.updateResumeSkill);

// Xóa ResumeSkill theo ID
router.delete('/:id', ResumeSkillController.deleteResumeSkill); 

// Lấy ResumeSkill theo ID của Resume
router.get('/resume/:id', ResumeSkillController.getResumeSkillByResumeID);

// Lấy ResumeSkill theo ID của Skill
router.get('/skill/:id', ResumeSkillController.getResumeSkillBySkillID);


module.exports = router;
