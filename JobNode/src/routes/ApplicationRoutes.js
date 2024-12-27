const ApplicationController = require('../controllers/applicationController');
const express = require('express');
const router = express.Router();

// Lấy tất cả Application
router.get('/', ApplicationController.getApplication);

// Lấy Application theo ID
router.get('/:id', ApplicationController.getApplicationByID);

// Lấy Application theo UserID
router.get('/user/:id', ApplicationController.getApplicationByUserID);

// Thêm mới Application
router.post('/', ApplicationController.addApplication);

// Cập nhật Application theo ID
router.put('/:id', ApplicationController.updateApplication);

// Xóa Application theo ID
router.delete('/:id', ApplicationController.deleteApplication);

// Xóa application theo PublisherID và UserID
router.delete('/publish/:id2/user/:id', ApplicationController.deleteApplicationByUserID);


module.exports = router;