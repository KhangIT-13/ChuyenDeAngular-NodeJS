const JobCategoryController = require('../controllers/JobCategoryController');
const express = require('express');
const router = express.Router();

// Lấy tất cả JobCategory
router.get('/', JobCategoryController.getJobCategory);

// Lấy JobCategory theo ID
router.get('/:id', JobCategoryController.getJobCategoryByID);

// Thêm mới JobCategory
router.post('/', JobCategoryController.addJobCategory);

// Cập nhật JobCategory theo ID
router.put('/:id', JobCategoryController.updateJobCategory);

// Xóa JobCategory theo ID
router.delete('/:id', JobCategoryController.deleteJobCategory);

module.exports = router;
