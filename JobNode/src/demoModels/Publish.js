const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Publish', {
    PublishID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PublishTitle: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Sex: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Requirements: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Nature: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LevelID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Levels',
        key: 'LevelID'
      }
    },
    EducationLevelID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'EducationLevels',
        key: 'EducationLevelID'
      }
    },
    ExperienceID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Experiences',
        key: 'ExperienceID'
      }
    },
    Salary: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    FormID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Forms',
        key: 'FormID'
      }
    },
    TryTime: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    IndustryID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Industries',
        key: 'IndustryID'
      }
    },
    WorkPlace: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CompanyID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Companies',
        key: 'CompanyID'
      }
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'UserID'
      }
    },
    SubmissionDeadline: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'Publish',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PublishID" },
        ]
      },
      {
        name: "LevelID",
        using: "BTREE",
        fields: [
          { name: "LevelID" },
        ]
      },
      {
        name: "EducationLevelID",
        using: "BTREE",
        fields: [
          { name: "EducationLevelID" },
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
        name: "FormID",
        using: "BTREE",
        fields: [
          { name: "FormID" },
        ]
      },
      {
        name: "IndustryID",
        using: "BTREE",
        fields: [
          { name: "IndustryID" },
        ]
      },
      {
        name: "CompanyID",
        using: "BTREE",
        fields: [
          { name: "CompanyID" },
        ]
      },
      {
        name: "UserID",
        using: "BTREE",
        fields: [
          { name: "UserID" },
        ]
      },
    ]
  });
};
