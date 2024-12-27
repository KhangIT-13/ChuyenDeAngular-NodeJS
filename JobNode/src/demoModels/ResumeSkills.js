const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ResumeSkills', {
    ResumeSkillID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ResumeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Resumes',
        key: 'ResumeID'
      }
    },
    SkillID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Skills',
        key: 'SkillID'
      }
    }
  }, {
    sequelize,
    tableName: 'ResumeSkills',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ResumeSkillID" },
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
        name: "SkillID",
        using: "BTREE",
        fields: [
          { name: "SkillID" },
        ]
      },
    ]
  });
};
