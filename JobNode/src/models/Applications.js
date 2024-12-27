const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Aplication = sequelize.define('Applications', {
    ApplicationID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PublishID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Publish',
        key: 'PublishID'
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
    ResumeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Resumes',
        key: 'ResumeID'
      }
    },
    AppliedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    StatusID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ApplicationStatus',
        key: 'StatusID'
      }
    }
  }, {
    sequelize,
    tableName: 'Applications',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ApplicationID" },
        ]
      },
      {
        name: "PublishID",
        using: "BTREE",
        fields: [
          { name: "PublishID" },
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
        name: "ResumeID",
        using: "BTREE",
        fields: [
          { name: "ResumeID" },
        ]
      },
      {
        name: "StatusID",
        using: "BTREE",
        fields: [
          { name: "StatusID" },
        ]
      },
    ]
  });
module.exports = Aplication;
