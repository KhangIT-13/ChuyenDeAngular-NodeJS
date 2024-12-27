const JobCategory = require('../models/JobCategories');

// Lấy tất cả JobCategory
exports.getJobCategory = async (req, res) => {
    try {
        const jobCategory = await JobCategory.findAll();
        res.json(jobCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy JobCategory theo ID
exports.getJobCategoryByID = async (req, res) => {
    try {
        const jobCategory = await JobCategory.findByPk(req.params.id);
        res.json(jobCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm mới JobCategory
exports.addJobCategory = async (req, res) => {
    try {
        const jobCategory = await JobCategory.create(req.body);
        res.json(jobCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật JobCategory theo ID
exports.updateJobCategory = async (req, res) => {
    try {
        const jobCategory = await JobCategory.update(req.body, {
            where: {
                CategoryID: req.params.id
            }
        });
        res.json(jobCategory);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Xóa JobCategory theo ID
exports.deleteJobCategory = async (req, res) => {
    try {
        await JobCategory.destroy({
            where: {
                CategoryID: req.params
            }
        });
        res.json({ message: "Xóa thành công!" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
