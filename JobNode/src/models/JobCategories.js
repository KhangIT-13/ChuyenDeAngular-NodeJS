const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const JobCategory = sequelize.define('JobCategories', {
    CategoryID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CategoryName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "CategoryName"
    }
  }, {
    sequelize,
    tableName: 'JobCategories',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CategoryID" },
        ]
      },
      {
        name: "CategoryName",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CategoryName" },
        ]
      },
    ]
  });
module.exports = JobCategory;
