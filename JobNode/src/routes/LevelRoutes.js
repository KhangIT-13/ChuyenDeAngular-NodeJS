const LevelController = require('../controllers/LevelController');
const express = require('express');
const router = express.Router();

// Lấy tất cả Level
router.get('/', LevelController.getLevel);

// Lấy Level theo ID
router.get('/:id', LevelController.getLevelByID);

// Thêm mới Level
router.post('/', LevelController.addLevel);

// Cập nhật Level theo ID
router.put('/:id', LevelController.updateLevel);

// Xóa Level theo ID
router.delete('/:id', LevelController.deleteLevel);

module.exports = router;
