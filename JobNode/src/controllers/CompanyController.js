const Company = require('../models/Companies');

// Lấy tất cả Company
exports.getCompany = async (req, res) => {
    try {
        const company = await Company.findAll();
        res.json(company);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy Company theo ID
exports.getCompanyByID = async (req, res) => {
    try {
        const company = await Company.findByPk(req.params.id);
        res.json(company);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm mới Company
exports.addCompany = async (req, res) => {
    try {
        const company = await Company.create(req.body);
        res.json(company);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật Company theo ID
exports.updateCompany = async (req, res) => {
    try {
        const company = await Company.update(req.body, {
            where: {
                CompanyID: req.params.id
            }
        });
        res.json(company);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Xóa Company theo ID
exports.deleteCompany = async (req, res) => {
    try {
        await Company.destroy({
            where: {
                CompanyID: req.params.id
            }
        });
        res.json({ message: "Xóa thành công!" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

