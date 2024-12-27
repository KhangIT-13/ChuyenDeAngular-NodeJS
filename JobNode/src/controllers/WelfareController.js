const Welfare = require('../models/Welfare');

// Lấy tất cả Welfare
exports.getWelfare = async (req, res) => {
    try {
        const welfare = await Welfare.findAll();
        res.json(welfare);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy Welfare theo ID
exports.getWelfareByID = async (req, res) => {
    try {
        const welfare = await Welfare.findByPk(req.params.id);
        res.json(welfare);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm mới Welfare
exports.addWelfare = async (req, res) => {
    try {
        const welfare = await Welfare.create(req.body);
        res.json(welfare);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật Welfare theo ID
exports.updateWelfare = async (req, res) => {
    try {
        const welfare = await Welfare.update(req.body, {
            where: {
                WelfareID: req.params.id
            }
        });
        res.json(welfare);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Xóa Welfare theo ID
exports.deleteWelfare = async (req, res) => {
    try {
        await Welfare.destroy({
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

