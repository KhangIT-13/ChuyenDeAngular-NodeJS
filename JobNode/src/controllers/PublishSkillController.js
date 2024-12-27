const PublishSkill = require('../models/PublishSkills');

// Lấy tất cả PublishSkill
exports.getPublishSkill = async (req, res) => {
    try {
        const publishSkill = await PublishSkill.findAll();
        res.json(publishSkill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy PublishSkill theo ID
exports.getPublishSkillByID = async (req, res) => {
    try {
        const publishSkill = await PublishSkill.findByPk(req.params.id);
        res.json(publishSkill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm mới PublishSkill
exports.addPublishSkill = async (req, res) => {
    try {
        const publishSkill = await PublishSkill.create(req.body);
        res.json(publishSkill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật PublishSkill theo ID
exports.updatePublishSkill = async (req, res) => {
    try {
        const publishSkill = await PublishSkill.update(req.body, {
            where: {
                PublishSkillID: req.params.id
            }
        });
        res.json(publishSkill);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Xóa PublishSkill theo ID
exports.deletePublishSkill = async (req, res) => {
    try {
        await PublishSkill.destroy({
            where: {
                PublishSkillID: req.params.id
            }
        });
        res.json({ message: "Xóa thành công!" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

