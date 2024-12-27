const ApLicationHistory = require('../models/ApplicationHistory');

// Lấy tất cả ApplicationHistory
exports.getApplicationHistory = async (req, res) => {
    try {
        const applicationHistory = await ApLicationHistory.findAll();
        res.json(applicationHistory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy ApplicationHistory theo ID
exports.getApplicationHistoryByID = async (req, res) => {
    try {
        const applicationHistory = await ApLicationHistory.findByPk(req.params.id);
        res.json(applicationHistory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm mới ApplicationHistory
exports.addApplicationHistory = async (req, res) => {
    try {
        const applicationHistory = await ApLicationHistory.create(req.body);
        res.json(applicationHistory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật ApplicationHistory theo ID
exports.updateApplicationHistory = async (req, res) => {
    try {
        const applicationHistory = await ApLicationHistory.update(req.body, {
            where: {
                HistoryID: req.params.id
            }
        });
        res.json(applicationHistory);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Xóa ApplicationHistory theo ID

exports.deleteApplicationHistory = async (req, res) => {
    try {
        await ApLicationHistory.destroy({
            where: {
                HistoryID: req.params.id
            }
        });
        res.json({ message: "Xóa thành công!" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}



// Lấy tất cả ApplicationHistory theo JobID
