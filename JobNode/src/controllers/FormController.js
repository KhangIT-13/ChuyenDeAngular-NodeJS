const Form = require('../models/Forms');

// Lấy tất cả Form
exports.getForm = async (req, res) => {
    try {
        const form = await Form.findAll();
        res.json(form);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy Form theo ID
exports.getFormByID = async (req, res) => {
    try {
        const form = await Form.findByPk(req.params.id);
        res.json(form);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm mới Form
exports.addForm = async (req, res) => {
    try {
        const form = await Form.create(req.body);
        res.json(form);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật Form theo ID

exports.updateForm = async (req, res) => {
    try {
        const form = await Form.update(req.body, {
            where: {
                FormID: req.params.id
            }
        });
        res.json(form);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Xóa Form theo ID
exports.deleteForm = async (req, res) => {
    try {
        await Form.destroy({
            where: {
                FormID: req.params.id
            }
        });
        res.json({ message: "Xóa thành công!" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
