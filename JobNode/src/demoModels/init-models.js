var DataTypes = require("sequelize").DataTypes;
var _ApplicationHistory = require("./ApplicationHistory");
var _ApplicationStatus = require("./ApplicationStatus");
var _Applications = require("./Applications");
var _Companies = require("./Companies");
var _EducationLevels = require("./EducationLevels");
var _Experiences = require("./Experiences");
var _Forms = require("./Forms");
var _Industries = require("./Industries");
var _JobCategories = require("./JobCategories");
var _JobWelfare = require("./JobWelfare");
var _Levels = require("./Levels");
var _Provinces = require("./Provinces");
var _Publish = require("./Publish");
var _PublishSkills = require("./PublishSkills");
var _ResumeSkills = require("./ResumeSkills");
var _Resumes = require("./Resumes");
var _Skills = require("./Skills");
var _Users = require("./Users");
var _Welfare = require("./Welfare");

function initModels(sequelize) {
  var ApplicationHistory = _ApplicationHistory(sequelize, DataTypes);
  var ApplicationStatus = _ApplicationStatus(sequelize, DataTypes);
  var Applications = _Applications(sequelize, DataTypes);
  var Companies = _Companies(sequelize, DataTypes);
  var EducationLevels = _EducationLevels(sequelize, DataTypes);
  var Experiences = _Experiences(sequelize, DataTypes);
  var Forms = _Forms(sequelize, DataTypes);
  var Industries = _Industries(sequelize, DataTypes);
  var JobCategories = _JobCategories(sequelize, DataTypes);
  var JobWelfare = _JobWelfare(sequelize, DataTypes);
  var Levels = _Levels(sequelize, DataTypes);
  var Provinces = _Provinces(sequelize, DataTypes);
  var Publish = _Publish(sequelize, DataTypes);
  var PublishSkills = _PublishSkills(sequelize, DataTypes);
  var ResumeSkills = _ResumeSkills(sequelize, DataTypes);
  var Resumes = _Resumes(sequelize, DataTypes);
  var Skills = _Skills(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);
  var Welfare = _Welfare(sequelize, DataTypes);

  ApplicationHistory.belongsTo(ApplicationStatus, { as: "Status", foreignKey: "StatusID"});
  ApplicationStatus.hasMany(ApplicationHistory, { as: "ApplicationHistories", foreignKey: "StatusID"});
  Applications.belongsTo(ApplicationStatus, { as: "Status", foreignKey: "StatusID"});
  ApplicationStatus.hasMany(Applications, { as: "Applications", foreignKey: "StatusID"});
  ApplicationHistory.belongsTo(Applications, { as: "Application", foreignKey: "ApplicationID"});
  Applications.hasMany(ApplicationHistory, { as: "ApplicationHistories", foreignKey: "ApplicationID"});
  Publish.belongsTo(Companies, { as: "Company", foreignKey: "CompanyID"});
  Companies.hasMany(Publish, { as: "Publishes", foreignKey: "CompanyID"});
  Publish.belongsTo(EducationLevels, { as: "EducationLevel", foreignKey: "EducationLevelID"});
  EducationLevels.hasMany(Publish, { as: "Publishes", foreignKey: "EducationLevelID"});
  Resumes.belongsTo(EducationLevels, { as: "Education", foreignKey: "EducationID"});
  EducationLevels.hasMany(Resumes, { as: "Resumes", foreignKey: "EducationID"});
  Publish.belongsTo(Experiences, { as: "Experience", foreignKey: "ExperienceID"});
  Experiences.hasMany(Publish, { as: "Publishes", foreignKey: "ExperienceID"});
  Resumes.belongsTo(Experiences, { as: "Experience", foreignKey: "ExperienceID"});
  Experiences.hasMany(Resumes, { as: "Resumes", foreignKey: "ExperienceID"});
  Publish.belongsTo(Forms, { as: "Form", foreignKey: "FormID"});
  Forms.hasMany(Publish, { as: "Publishes", foreignKey: "FormID"});
  Companies.belongsTo(Industries, { as: "Industry", foreignKey: "IndustryID"});
  Industries.hasMany(Companies, { as: "Companies", foreignKey: "IndustryID"});
  Publish.belongsTo(Industries, { as: "Industry", foreignKey: "IndustryID"});
  Industries.hasMany(Publish, { as: "Publishes", foreignKey: "IndustryID"});
  Publish.belongsTo(Levels, { as: "Level", foreignKey: "LevelID"});
  Levels.hasMany(Publish, { as: "Publishes", foreignKey: "LevelID"});
  Resumes.belongsTo(Levels, { as: "CurrentLevel", foreignKey: "CurrentLevelID"});
  Levels.hasMany(Resumes, { as: "Resumes", foreignKey: "CurrentLevelID"});
  Resumes.belongsTo(Levels, { as: "WishLevel", foreignKey: "WishLevelID"});
  Levels.hasMany(Resumes, { as: "WishLevel_Resumes", foreignKey: "WishLevelID"});
  Resumes.belongsTo(Provinces, { as: "WishProvince", foreignKey: "WishProvinceID"});
  Provinces.hasMany(Resumes, { as: "Resumes", foreignKey: "WishProvinceID"});
  Applications.belongsTo(Publish, { as: "Publish", foreignKey: "PublishID"});
  Publish.hasMany(Applications, { as: "Applications", foreignKey: "PublishID"});
  JobWelfare.belongsTo(Publish, { as: "Publish", foreignKey: "PublishID"});
  Publish.hasMany(JobWelfare, { as: "JobWelfares", foreignKey: "PublishID"});
  PublishSkills.belongsTo(Publish, { as: "Publish", foreignKey: "PublishID"});
  Publish.hasMany(PublishSkills, { as: "PublishSkills", foreignKey: "PublishID"});
  Applications.belongsTo(Resumes, { as: "Resume", foreignKey: "ResumeID"});
  Resumes.hasMany(Applications, { as: "Applications", foreignKey: "ResumeID"});
  ResumeSkills.belongsTo(Resumes, { as: "Resume", foreignKey: "ResumeID"});
  Resumes.hasMany(ResumeSkills, { as: "ResumeSkills", foreignKey: "ResumeID"});
  PublishSkills.belongsTo(Skills, { as: "Skill", foreignKey: "SkillID"});
  Skills.hasMany(PublishSkills, { as: "PublishSkills", foreignKey: "SkillID"});
  ResumeSkills.belongsTo(Skills, { as: "Skill", foreignKey: "SkillID"});
  Skills.hasMany(ResumeSkills, { as: "ResumeSkills", foreignKey: "SkillID"});
  Applications.belongsTo(Users, { as: "User", foreignKey: "UserID"});
  Users.hasMany(Applications, { as: "Applications", foreignKey: "UserID"});
  Publish.belongsTo(Users, { as: "User", foreignKey: "UserID"});
  Users.hasMany(Publish, { as: "Publishes", foreignKey: "UserID"});
  Resumes.belongsTo(Users, { as: "User", foreignKey: "UserID"});
  Users.hasMany(Resumes, { as: "Resumes", foreignKey: "UserID"});
  JobWelfare.belongsTo(Welfare, { as: "Welfare", foreignKey: "WelfareID"});
  Welfare.hasMany(JobWelfare, { as: "JobWelfares", foreignKey: "WelfareID"});

  return {
    ApplicationHistory,
    ApplicationStatus,
    Applications,
    Companies,
    EducationLevels,
    Experiences,
    Forms,
    Industries,
    JobCategories,
    JobWelfare,
    Levels,
    Provinces,
    Publish,
    PublishSkills,
    ResumeSkills,
    Resumes,
    Skills,
    Users,
    Welfare,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
