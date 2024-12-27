const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const EducationLevel = sequelize.define('EducationLevels', {
    EducationLevelID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EducationLevelName: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'EducationLevels',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EducationLevelID" },
        ]
      },
    ]
  });
module.exports = EducationLevel;
