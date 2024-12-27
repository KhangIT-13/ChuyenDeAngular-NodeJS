const Aplication = require('../models/Applications');

// Lấy tất cả Application
exports.getApplication = async (req, res) => {
    try {
        const application = await Aplication.findAll();
        res.json(application);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy Application theo ID
exports.getApplicationByID = async (req, res) => {
    try {
        const application = await Aplication.findByPk(req.params.id);
        res.json(application);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy application theo UserID
exports.getApplicationByUserID = async (req, res) => {
    try {
        const application = await Aplication.findAll({
            where: {
                UserID: req.params.id
            }
        });
        res.json(application);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm mới Application
exports.addApplication = async (req, res) => {
    try {
        const application = await Aplication.create(req.body);
        res.json(application);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật Application theo ID
exports.updateApplication = async (req, res) => {
    try {
        const application = await Aplication.update(req.body, {
            where: {
                ApplicationID: req.params.id
            }
        });
        res.json(application);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// Xóa application theo PublisherID và UserID
exports.deleteApplicationByUserID = async (req, res) => {
    try {
        await Aplication.destroy({
            where: {
                UserID: req.params.id,
                PublishID: req.params.id2
            }
        });
        res.json({ message: "Xóa thành công!" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Xóa Application theo ID

exports.deleteApplication = async (req, res) => {
    try {
        await Aplication.destroy({
            where: {
                ApplicationID: req.params.id
            }
        });
        res.json({ message: "Xóa thành công!" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}


