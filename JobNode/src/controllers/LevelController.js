const Level = require('../models/Levels');

// Lấy tất cả Level
exports.getLevel = async (req, res) => {
    try {
        const level = await Level.findAll();
        res.json(level);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy Level theo ID
exports.getLevelByID = async (req, res) => {
    try {
        const level = await Level.findByPk(req.params.id);
        res.json(level);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm mới Level
exports.addLevel = async (req, res) => {
    try {
        const level = await Level.create(req.body);
        res.json(level);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật Level theo ID
exports.updateLevel = async (req, res) => {
    try {
        const level = await Level.update(req.body, {
            where: {
                LevelID: req.params.id
            }
        });
        res.json(level);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Xóa Level theo ID
exports.deleteLevel = async (req, res) => {
    try {
        await Level.destroy({
            where: {
                LevelID: req.params.id
            }
        });
        res.json({ message: "Xóa thành công!" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });

    }
}
