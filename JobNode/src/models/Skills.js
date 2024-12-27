const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Skill = sequelize.define('Skills', {
    SkillID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SkillName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "SkillName"
    }
  }, {
    sequelize,
    tableName: 'Skills',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SkillID" },
        ]
      },
      {
        name: "SkillName",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SkillName" },
        ]
      },
    ]
  });
module.exports = Skill;
