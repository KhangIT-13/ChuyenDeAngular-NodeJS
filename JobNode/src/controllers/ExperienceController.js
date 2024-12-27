const Experience = require('../models/Experiences');

// Lấy tất cả Experience
exports.getExperience = async (req, res) => {
    try {
        const experience = await Experience.findAll();
        res.json(experience);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy Experience theo ID
exports.getExperienceByID = async (req, res) => {
    try {
        const experience = await Experience.findByPk(req.params.id);
        res.json(experience);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm mới Experience
exports.addExperience = async (req, res) => {
    try {
        const experience = await Experience.create(req.body);
        res.json(experience);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật Experience theo ID
exports.updateExperience = async (req, res) => {
    try {
        const experience = await Experience.update(req.body, {
            where: {
                ExperienceID: req.params.id
            }
        });
        res.json(experience);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Xóa Experience theo ID
exports.deleteExperience = async (req, res) => {
    try {
        await Experience.destroy({
            where: {
                ExperienceID: req.params.id
            }
        });
        res.json({ message: "Xóa thành công!" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
