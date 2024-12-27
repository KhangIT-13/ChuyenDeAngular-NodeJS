const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const ApLicationHistory = sequelize.define('ApplicationHistory', {
    HistoryID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ApplicationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Applications',
        key: 'ApplicationID'
      }
    },
    StatusID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ApplicationStatus',
        key: 'StatusID'
      }
    },
    ChangedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'ApplicationHistory',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "HistoryID" },
        ]
      },
      {
        name: "ApplicationID",
        using: "BTREE",
        fields: [
          { name: "ApplicationID" },
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
module.exports = ApLicationHistory;
