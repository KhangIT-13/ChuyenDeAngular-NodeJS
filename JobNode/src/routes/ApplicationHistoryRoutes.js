const ApplicaitonHistoryController = require('../controllers/ApplicationHistoryController');
const express = require('express');
const router = express.Router();

// Lấy tất cả ApplicationHistory
router.get('/', ApplicaitonHistoryController.getApplicationHistory);

// Lấy ApplicationHistory theo ID
router.get('/:id', ApplicaitonHistoryController.getApplicationHistoryByID);

// Thêm mới ApplicationHistory
router.post('/', ApplicaitonHistoryController.addApplicationHistory);

// Cập nhật ApplicationHistory theo ID
router.put('/:id', ApplicaitonHistoryController.updateApplicationHistory);

// Xóa ApplicationHistory theo ID
router.delete('/:id', ApplicaitonHistoryController.deleteApplicationHistory);

module.exports = router;

