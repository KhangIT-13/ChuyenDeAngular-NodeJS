const ResumeSkill = require('../models/ResumeSkills');

// Lấy tất cả ResumeSkill
exports.getResumeSkill = async (req, res) => {
    try {
        const resumeSkill = await ResumeSkill.findAll();
        res.json(resumeSkill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy ResumeSkill theo ID
exports.getResumeSkillByID = async (req, res) => {
    try {
        const resumeSkill = await ResumeSkill.findByPk(req.params.id);
        res.json(resumeSkill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm mới ResumeSkill
exports.addResumeSkill = async (req, res) => {
    try {
        const resumeSkill = await ResumeSkill.create(req.body);
        res.json(resumeSkill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật ResumeSkill theo ID
exports.updateResumeSkill = async (req, res) => {
    try {
        const resumeSkill = await ResumeSkill.update(req.body, {
            where: {
                ResumeSkillID: req.params.id
            }
        });
        res.json(resumeSkill);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Xóa ResumeSkill theo ID
exports.deleteResumeSkill = async (req, res) => {
    try {
        await ResumeSkill.destroy({
            where: {
                ResumeSkillID: req.params.id
            }
        });
        res.json({ message: "Xóa thành công!" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Lấy ResumeSkill theo ResumeID
exports.getResumeSkillByResumeID = async (req, res) => {
    try {
        const resumeSkill = await ResumeSkill.findAll({
            where: {
                ResumeID: req.params.id
            }
        });
        res.json(resumeSkill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy ResumeSkill theo SkillID
exports.getResumeSkillBySkillID = async (req, res) => {
    try {
        const resumeSkill = await ResumeSkill.findAll({
            where: {
                SkillID: req.params.id
            }
        });
        res.json(resumeSkill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
