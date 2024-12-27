const ApplicationStatusController = require('../controllers/ApplicationStatusController');
const express = require('express');
const router = express.Router();

// Lấy tất cả ApplicationStatus
router.get('/', ApplicationStatusController.getApplicationStatus);

// Lấy ApplicationStatus theo ID
router.get('/:id', ApplicationStatusController.getApplicationStatusByID);

// Thêm mới ApplicationStatus
router.post('/', ApplicationStatusController.addApplicationStatus);

// Cập nhật ApplicationStatus theo ID
router.put('/:id', ApplicationStatusController.updateApplicationStatus);

// Xóa ApplicationStatus theo ID
router.delete('/:id', ApplicationStatusController.deleteApplicationStatus);

module.exports = router;