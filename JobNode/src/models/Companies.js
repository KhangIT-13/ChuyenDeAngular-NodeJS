const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Company = sequelize.define('Companies', {
    CompanyID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CompanyName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Website: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Country: {
      type: DataTypes.STRING(255),
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
    EmployeeCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Logo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Companies',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CompanyID" },
        ]
      },
      {
        name: "IndustryID",
        using: "BTREE",
        fields: [
          { name: "IndustryID" },
        ]
      },
    ]
  });
module.exports = Company;
