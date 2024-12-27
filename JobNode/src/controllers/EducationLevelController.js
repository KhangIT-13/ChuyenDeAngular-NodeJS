const EducationLevel = require('../models/EducationLevels');

// Lấy tất cả EducationLevel
exports.getEducationLevel = async (req, res) => {
    try {
        const educationLevel = await EducationLevel.findAll();
        res.json(educationLevel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy EducationLevel theo ID
exports.getEducationLevelByID = async (req, res) => {
    try {
        const educationLevel = await EducationLevel.findByPk(req.params.id);
        res.json(educationLevel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm mới EducationLevel
exports.addEducationLevel = async (req, res) => {
    try {
        const educationLevel = await EducationLevel.create(req.body);
        res.json(educationLevel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật EducationLevel theo ID
exports.updateEducationLevel = async (req, res) => {
    try {
        const educationLevel = await EducationLevel.update(req.body, {
            where: {
                LevelID: req.params.id
            }
        });
        res.json(educationLevel);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Xóa EducationLevel theo ID
exports.deleteEducationLevel = async (req, res) => {
    try {
        await EducationLevel.destroy({
            where: {
                LevelID: req.params.id
            }
        });
        res.json({ message: "Xóa thành công!" });
    }
    catch (error) {
        res.status(500).json({ message: error.message
        });
    }
}

