const express = require('express');
const router = express.Router();

// Thêm các route 
const ApplicationHistoryRoutes = require('./ApplicationHistoryRoutes');
const ApplicationRoutes = require('./ApplicationRoutes');
const ApplicationStatusRoutes = require('./ApplicationStatusRoutes');
const CompanyRoutes = require('./CompanyRoutes');
const EducationLevelRoutes = require('./EducationLevelRoutes');
const ExperienceRoutes = require('./ExperienceRoutes');
const FormRoutes = require('./FormRoutes');
const IndustryRoutes = require('./IndustryRoutes');
const JobCategoryRoutes = require('./JobCategoryRoutes');
const JobWelfareRoutes = require('./JobWelfareRoutes');
const LevelRoutes = require('./LevelRoutes');
const ProvinceRoutes = require('./ProvinceRoutes');
const PublishRoutes = require('./PublishRoutes');
const PublishSkillRoutes = require('./PublishSkillRoutes');
const ResumeRoutes = require('./ResumeRoutes');
const ResumeSkillRoutes = require('./ResumeSkillRoutes');
const SkillRoutes = require('./SkillRoutes');
const UserRoutes = require('./UserRoutes');
const WelfareRoutes = require('./WelfareRoutes');

router.use('/application-history', ApplicationHistoryRoutes);
router.use('/applications', ApplicationRoutes);
router.use('/application-status', ApplicationStatusRoutes);
router.use('/companies', CompanyRoutes);
router.use('/education-levels', EducationLevelRoutes);
router.use('/experiences', ExperienceRoutes);
router.use('/forms', FormRoutes);
router.use('/industries', IndustryRoutes);
router.use('/job-categories', JobCategoryRoutes);
router.use('/job-welfares', JobWelfareRoutes);
router.use('/levels', LevelRoutes);
router.use('/provinces', ProvinceRoutes);
router.use('/publishes', PublishRoutes);
router.use('/publish-skills', PublishSkillRoutes);
router.use('/resumes', ResumeRoutes);
router.use('/resume-skills', ResumeSkillRoutes);
router.use('/skills', SkillRoutes);
router.use('/users', UserRoutes);
router.use('/welfares', WelfareRoutes);

module.exports = router;
