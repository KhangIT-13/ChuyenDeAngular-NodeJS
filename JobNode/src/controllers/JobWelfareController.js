const JobWelfare = require('../models/JobWelfare');

// Lấy tất cả JobWelfare
exports.getJobWelfare = async (req, res) => {
    try {
        const jobWelfare = await JobWelfare.findAll();
        res.json(jobWelfare);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy JobWelfare theo ID
exports.getJobWelfareByID = async (req, res) => {
    try {
        const jobWelfare = await JobWelfare.findByPk(req.params.id);
        res.json(jobWelfare);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm mới JobWelfare
exports.addJobWelfare = async (req, res) => {
    try {
        const jobWelfare = await JobWelfare.create(req.body);
        res.json(jobWelfare);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật JobWelfare theo ID
exports.updateJobWelfare = async (req, res) => {
    try {
        const jobWelfare = await JobWelfare.update(req.body, {
            where: {
                WelfareID: req.params.id
            }
        });
        res.json(jobWelfare);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Xóa JobWelfare theo ID
exports.deleteJobWelfare = async (req, res) => {
    try {
        await JobWelfare.destroy({
            where: {
                WelfareID: req.params.id
            }
        });
        res.json({ message: "Xóa thành công!" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Lấy JobWelfare theo PublishID
exports.getJobWelfareByPublishID = async (req, res) => {
    try {
        const jobWelfare = await JobWelfare.findAll({
            where: {
                PublishID: req.params.id
            }
        });
        res.json(jobWelfare);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};