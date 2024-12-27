const Province = require('../models/Provinces');

// Lấy tất cả Province
exports.getProvince = async (req, res) => {
    try {
        const province = await Province.findAll();
        res.json(province);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy Province theo ID
exports.getProvinceByID = async (req, res) => {
    try {
        const province = await Province.findByPk(req.params.id);
        res.json(province);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm mới Province
exports.addProvince = async (req, res) => {
    try {
        const province = await Province.create(req.body);
        res.json(province);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật Province theo ID
exports.updateProvince = async (req, res) => {
    try {
        const province = await Province.update(req.body, {
            where: {
                ProvinceID: req.params.id
            }
        });
        res.json(province);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Xóa Province theo ID
exports.deleteProvince = async (req, res) => {
    try {
        await Province.destroy({
            where: {
                ProvinceID: req.params.id
            }
        });
        res.json({ message: "Xóa thành công!" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

