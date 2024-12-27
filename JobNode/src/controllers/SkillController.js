const Skill = require('../models/Skills');

// Lấy tất cả Skill
exports.getSkill = async (req, res) => {
    try {
        const skill = await Skill.findAll();
        res.json(skill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy Skill theo ID
exports.getSkillByID = async (req, res) => {
    try {
        const skill = await Skill.findByPk(req.params.id);
        res.json(skill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm mới Skill
exports.addSkill = async (req, res) => {
    try {
        const skill = await Skill.create(req.body);
        res.json(skill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật Skill theo ID
exports.updateSkill = async (req, res) => {
    try {
        const skill = await Skill.update(req.body, {
            where: {
                SkillID: req.params.id
            }
        });
        res.json(skill);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Xóa Skill theo ID
exports.deleteSkill = async (req, res) => {
    try {
        await Skill.destroy({
            where: {
                SkillID: req.params.id
            }
        });
        res.json({ message: "Xóa thành công!" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

