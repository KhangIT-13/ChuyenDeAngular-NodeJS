const JobWelfareController = require('../controllers/JobWelfareController');
const express = require('express');
const router = express.Router();

// Lấy tất cả JobWelfare
router.get('/', JobWelfareController.getJobWelfare);

// Lấy JobWelfare theo ID
router.get('/:id', JobWelfareController.getJobWelfareByID);

// Thêm mới JobWelfare
router.post('/', JobWelfareController.addJobWelfare);

// Cập nhật JobWelfare theo ID
router.put('/:id', JobWelfareController.updateJobWelfare);

// Xóa JobWelfare theo ID
router.delete('/:id', JobWelfareController.deleteJobWelfare);

// Lấy JobWelfare theo PublishID
router.get('/publish/:id', JobWelfareController.getJobWelfareByPublishID);

module.exports = router;
