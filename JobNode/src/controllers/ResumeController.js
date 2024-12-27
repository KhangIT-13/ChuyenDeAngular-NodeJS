const Resume = require('../models/Resumes');

// Lấy tất cả Resume
exports.getResume = async (req, res) => {
    try {
        const resume = await Resume.findAll();
        res.json(resume);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy Resume theo ID
exports.getResumeByID = async (req, res) => {
    try {
        const resume = await Resume.findByPk(req.params.id);
        res.json(resume);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm mới Resume
exports.addResume = async (req, res) => {
    try {
        const resume = await Resume.create(req.body);
        res.json(resume);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật Resume theo ID
exports.updateResume = async (req, res) => {
    try {
        const resume = await Resume.update(req.body, {
            where: {
                ResumeID: req.params.id
            }
        });
        res.json(resume);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Xóa Resume theo ID
exports.deleteResume = async (req, res) => {
    try {
        await Resume.destroy({
            where: {
                ResumeID: req.params.id
            }
        });
        res.json({ message: "Xóa thành công!" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Lấy Resume theo UserID
exports.getResumeByUserID = async (req, res) => {
    try {
        const resume = await Resume.findAll({
            where: {
                UserID: req.params.id
            }
        });
        res.json(resume[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy Resume theo JobID và UserID
exports.getResumeByJobIDAndUserID = async (req, res) => {
    try {
        const resume = await Resume.findAll({
            where: {
                JobID: req.params.jobid,
                UserID: req.params.userid
            }
        });
        res.json(resume);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

