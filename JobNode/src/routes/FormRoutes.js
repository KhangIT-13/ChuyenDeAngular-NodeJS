const FormController = require('../controllers/FormController');
const express = require('express');
const router = express.Router();

// Lấy tất cả Form
router.get('/', FormController.getForm);

// Lấy Form theo ID
router.get('/:id', FormController.getFormByID);

// Thêm mới Form
router.post('/', FormController.addForm);

// Cập nhật Form theo ID
router.put('/:id', FormController.updateForm);

// Xóa Form theo ID
router.delete('/:id', FormController.deleteForm);

module.exports = router;
