const PublishController = require('../controllers/PublishController');
const express = require('express');
const router = express.Router();

// Lấy tất cả Publish
router.get('/', PublishController.getPublish);

// Lấy Publish theo ID
router.get('/:id', PublishController.getPublishByID);

// Lấy số lượng Publish theo UserID
router.get('/user/:id', PublishController.getPublishByUserID);

// Thêm mới Publish
router.post('/', PublishController.addPublish);

// Cập nhật Publish theo ID
router.put('/:id', PublishController.updatePublish);

// Xóa Publish theo ID
router.delete('/:id', PublishController.deletePublish);

module.exports = router;