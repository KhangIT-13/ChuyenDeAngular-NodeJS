const CompanyController = require('../controllers/CompanyController');
const express = require('express');
const router = express.Router();

// Lấy tất cả Company
router.get('/', CompanyController.getCompany);

// Lấy Company theo ID
router.get('/:id', CompanyController.getCompanyByID);

// Thêm mới Company
router.post('/', CompanyController.addCompany);

// Cập nhật Company theo ID
router.put('/:id', CompanyController.updateCompany);

// Xóa Company theo ID
router.delete('/:id', CompanyController.deleteCompany);

module.exports = router;
