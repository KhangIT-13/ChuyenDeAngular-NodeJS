const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Resume = sequelize.define('Resumes', {
  ResumeID: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'UserID'
    }
  },
  Title: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  Summary: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  Skills: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  ExperienceID: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Experiences',
      key: 'ExperienceID'
    }
  },
  EducationID: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'EducationLevels',
      key: 'EducationLevelID'
    }
  },
  CurrentLevelID: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Levels',
      key: 'LevelID'
    }
  },
  WishLevelID: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Levels',
      key: 'LevelID'
    }
  },
  WishSalary: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  WishProvinceID: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Provinces',
      key: 'ProvinceID'
    }
  }
}, {
  sequelize,
  tableName: 'Resumes',
  timestamps: true,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "ResumeID" },
      ]
    },
    {
      name: "UserID",
      using: "BTREE",
      fields: [
        { name: "UserID" },
      ]
    },
    {
      name: "WishProvinceID",
      using: "BTREE",
      fields: [
        { name: "WishProvinceID" },
      ]
    },
    {
      name: "ExperienceID",
      using: "BTREE",
      fields: [
        { name: "ExperienceID" },
      ]
    },
    {
      name: "EducationID",
      using: "BTREE",
      fields: [
        { name: "EducationID" },
      ]
    },
    {
      name: "CurrentLevelID",
      using: "BTREE",
      fields: [
        { name: "CurrentLevelID" },
      ]
    },
    {
      name: "WishLevelID",
      using: "BTREE",
      fields: [
        { name: "WishLevelID" },
      ]
    },
  ]
});
module.exports = Resume;  
