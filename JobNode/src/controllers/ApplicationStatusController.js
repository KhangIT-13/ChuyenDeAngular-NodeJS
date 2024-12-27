const ApplicationStatus = require('../models/ApplicationStatus');

// Lấy tất cả ApplicationStatus
exports.getApplicationStatus = async (req, res) => {
    try {
        const applicationStatus = await ApplicationStatus.findAll();
        res.json(applicationStatus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy ApplicationStatus theo ID
exports.getApplicationStatusByID = async (req, res) => {
    try {
        const applicationStatus = await ApplicationStatus.findByPk(req.params.id);
        res.json(applicationStatus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm mới ApplicationStatus
exports.addApplicationStatus = async (req, res) => {
    try {
        const applicationStatus = await ApplicationStatus.create(req.body);
        res.json(applicationStatus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật ApplicationStatus theo ID
exports.updateApplicationStatus = async (req, res) => {
    try {
        const applicationStatus = await ApplicationStatus.update(req.body, {
            where: {
                StatusID: req.params.id
            }
        });
        res.json(applicationStatus);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Xóa ApplicationStatus theo ID
exports.deleteApplicationStatus = async (req, res) => {
    try {
        await ApplicationStatus.destroy({
            where: {
                StatusID: req.params.id
            }
        });
        res.json({ message: "Xóa thành công!" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
