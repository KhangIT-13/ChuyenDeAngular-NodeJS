const ResumeController = require('../controllers/ResumeController');
const express = require('express');
const router = express.Router();

// Lấy tất cả Resume
router.get('/', ResumeController.getResume);

// Lấy Resume theo ID
router.get('/:id', ResumeController.getResumeByID);

// Thêm mới Resume
router.post('/', ResumeController.addResume);

// Cập nhật Resume theo ID
router.put('/:id', ResumeController.updateResume);

// Xóa Resume theo ID
router.delete('/:id', ResumeController.deleteResume);

// Lấy Resume theo ID của User
router.get('/user/:id', ResumeController.getResumeByUserID);

// Lấy Resume theo ID của Job và User
router.get('/job/:jobID/user/:userID', ResumeController.getResumeByJobIDAndUserID);

module.exports = router;
