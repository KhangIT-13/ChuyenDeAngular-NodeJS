const Industry = require('../models/Industries');

// Lấy tất cả Industry
exports.getIndustry = async (req, res) => {
    try {
        const industry = await Industry.findAll();
        res.json(industry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy Industry theo ID
exports.getIndustryByID = async (req, res) => {
    try {
        const industry = await Industry.findByPk(req.params.id);
        res.json(industry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm mới Industry
exports.addIndustry = async (req, res) => {
    try {
        const industry = await Industry.create(req.body);
        res.json(industry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật Industry theo ID
exports.updateIndustry = async (req, res) => {
    try {
        const industry = await Industry.update(req.body, {
            where: {
                IndustryID: req.params
            }
        });
        res.json(industry);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Xóa Industry theo ID
exports.deleteIndustry = async (req, res) => {
    try {
        await Industry.destroy({
            where: {
                IndustryID: req.params.id
            }
        });
        res.json({ message: "Xóa thành công!" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
