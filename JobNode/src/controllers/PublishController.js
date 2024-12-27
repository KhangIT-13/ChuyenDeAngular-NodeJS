const Publish = require('../models/Publish');

// Lấy tất cả Publish
exports.getPublish = async (req, res) => {
    try {
        const publish = await Publish.findAll();
        res.json(publish);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy Publish theo ID
exports.getPublishByID = async (req, res) => {
    try {
        const publish = await Publish.findByPk(req.params.id);
        res.json(publish);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy số lượng Publish theo UserID
exports.getPublishByUserID = async (req, res) => {
    try {
        const publish = await Publish.findAll({
            where: {
                UserID: req.params.id
            }
        });
        res.json(publish);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm mới Publish
exports.addPublish = async (req, res) => {
    try {
        const publish = await Publish.create(req.body);
        res.json(publish);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật Publish theo ID
exports.updatePublish = async (req, res) => {
    try {
        const publish = await Publish.update(req.body, {
            where: {
                PublishID: req.params.id
            }
        });
        res.json(publish);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Xóa Publish theo ID
exports.deletePublish = async (req, res) => {
    try {
        await Publish.destroy({
            where: {
                PublishID: req.params.id
            }
        });
        res.json({ message: "Xóa thành công!" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
